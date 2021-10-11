import pick from "lodash.pick";
import type { NextApiRequest, NextApiResponse } from "next";

async function getTermSummary(termKey: string) {
	const wikipediaResponse = await fetch(
		`${process.env.WIKIMEDIA_REST_API}/page/summary/${termKey}`
	);
	if (!wikipediaResponse.ok) {
		return Promise.reject(wikipediaResponse.status);
	}

	let termData: Record<string, any> | undefined;
	try {
		termData = await wikipediaResponse.json();
	} catch (error) {
		console.log(`Failure at parsing json response. ${error as string}`);
		return Promise.reject(500);
	}

	return Promise.resolve(termData);
}

async function desambiguate(termKey: string) {
	const wikipediaSectionsData = await fetch(
		`${process.env.WIKIMEDIA_REST_API}/page/segments/${termKey}`
	);
	if (!wikipediaSectionsData.ok) {
		return Promise.reject(wikipediaSectionsData.status);
	}

	const desambiguationData = await wikipediaSectionsData.json();
	const regeExp = /(?<=title=\\")(.*?)(?=\\">)/;
	const regexExpMatcher = new RegExp('(?<=title=\\")(.*?)(?=\\">)', "m");
	const matches = regexExpMatcher.exec(desambiguationData.segmentedContent);
	// Es
	console.log(
		`Desambiguated <${matches[0]}> from ${termKey} with regex ${
			regeExp.source
		}, source:${(desambiguationData.segmentedContent as string)?.slice(
			0,
			50
		)}...`
	);
	if (!matches) return Promise.reject(500);
	const desambiguatedSummaryData = await getTermSummary(matches[0]);
	return Promise.resolve(desambiguatedSummaryData);
}

async function handler(request: NextApiRequest, response: NextApiResponse) {
	if (request.method !== "GET") {
		response.status(404).json(undefined);
		return;
	}

	const { termKey } = request.query;
	let summaryData: Record<string, any>;
	try {
		summaryData = await getTermSummary(termKey as string);
	} catch (error) {
		response.status(typeof error === "number" ? error : 500).json({ error });
		return;
	}

	const desambiguationPortal =
		summaryData.type === "disambiguation" &&
		summaryData.content_urls.desktop.page;
	if (desambiguationPortal) {
		try {
			summaryData = await desambiguate(termKey as string);
		} catch (error) {
			response.status(typeof error === "number" ? error : 500).json({ error });
			return;
		}
	}

	response.status(200).json({
		...pick(summaryData, [
			"title",
			"description",
			"thumbnail",
			"extract",
			"pageid",
			"content_urls"
		]),
		desambiguationPortal
	});
}

export default handler;
