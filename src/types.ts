export interface TermData {
	pageid: number,
	description: string,
	thumbnail?: {
		source: string,
		width: number,
		height: number
	},
	extract: string
}