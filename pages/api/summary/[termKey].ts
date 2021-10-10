import pick from "lodash.pick";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		res.status(404).json(undefined);
		return;
	}
	const { termKey } = req.query;

	const wikipediaResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${termKey}`);
	const json = await wikipediaResponse.json();
	if (!wikipediaResponse.ok) {
		res.status(wikipediaResponse.status).json({ error: json?.title ?? wikipediaResponse.status });
		return;
	}
	res.status(200).json(pick(json, ["description", "thumbnail", "extract", "pageid"]))
}

export default handler;