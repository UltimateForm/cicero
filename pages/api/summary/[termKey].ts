import { escapeRegExp } from "lodash";
import pick from "lodash.pick";
import type { NextApiRequest, NextApiResponse } from "next";

async function getTermSummary(termKey: string) {
	const wikipediaResponse = await fetch(`${process.env.WIKIMEDIA_REST_API}/page/summary/${termKey}`);
	if (!wikipediaResponse.ok) {
		return Promise.reject(wikipediaResponse.status);
	}
	let termData: Record<string, any> | undefined = undefined;
	try {
		termData = await wikipediaResponse.json();
	} catch (error) {
		console.log(`Failure at parsing json response. ${error}`)
		return Promise.reject(500)
	}
	return Promise.resolve(termData);
}

async function desambiguate(termKey: string) {
	const wikipediaSectionsData = await fetch(`${process.env.WIKIMEDIA_REST_API}/page/segments/${termKey}`);
	if (!wikipediaSectionsData.ok) {
		return Promise.reject(wikipediaSectionsData.status);
	}
	const desambiguationData = await wikipediaSectionsData.json();
	const regeExp = /(?<=title=\\\")(.*?)(?=\\\"\>)/;
	const regexExpMatcher = new RegExp("(?<=title=\\\")(.*?)(?=\\\"\>)", "m");
	const matches = regexExpMatcher.exec(desambiguationData.segmentedContent);
	console.log(`Desambiguated <${matches}> from ${termKey} with regex ${regeExp}, source:${desambiguationData.segmentedContent?.substring(0, 50)}...`)
	if (!matches) return Promise.reject(500);
	const desambiguatedSummaryData = await getTermSummary(matches[0]);
	return Promise.resolve(desambiguatedSummaryData);
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		res.status(404).json(undefined);
		return;
	}
	const { termKey } = req.query;
	let summaryData: Record<string, any>;
	try {
		summaryData = await getTermSummary(termKey as string);
	} catch (error) {
		res.status(typeof error === "number" ? error : 500).json({ error });
		return;
	}
	const ambiguous = summaryData.type === "disambiguation";
	if (ambiguous) {
		try {
			summaryData = await desambiguate(termKey as string);
		} catch (error) {
			res.status(typeof error === "number" ? error : 500).json({ error });
			return;
		}
	}
	res.status(200).json({ ...pick(summaryData, ["title", "description", "thumbnail", "extract", "pageid"]), ambiguous })
}

export default handler;