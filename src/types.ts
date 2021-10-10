export interface TermData {
	pageid: number,
	title: string,
	description: string,
	thumbnail?: {
		source: string,
		width: number,
		height: number
	},
	extract: string
}