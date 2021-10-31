export interface TermData {
	pageid: number;
	title: string;
	description: string;
	thumbnail?: {
		source: string;
		width: number;
		height: number;
	};
	extract: string;
	content_urls: {
		desktop: {
			page: string;
		};
		mobile: {
			page: string;
		};
	};
	desambiguationPortal: boolean | string;
}

export interface Poem {
	date: string;
	title: string;
	body: string;
}
