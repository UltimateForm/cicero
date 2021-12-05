import { TermData } from "types";

export interface ISummaryProps {
	title: string;
	summary: string;
	image: string;
	id: number;
	desambiguationPortal: TermData["desambiguationPortal"];
	content_urls: TermData["content_urls"];
}
