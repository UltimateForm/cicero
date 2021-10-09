import React from "react";
import { splitByLine, splitByWord } from "utils/text";
import { IWordProps } from "./Word";

interface ITextAssemblerProps {
	text: string;
	renderWord: React.FunctionComponent<IWordProps>;
}
export function TextAssembler(props: ITextAssemblerProps) {
	const { text, renderWord } = props;
	const mappedLines = React.useMemo(() => {
		const lines = splitByLine(text).map((line) => {
			const words = splitByWord(line);
			return words;
		});
		return lines;
	}, [text]);
	return (
		<div>
			{mappedLines.map((line, index) => (
				<>
					<span className="pr-2 hover:border-r-2 hover:border-b-transparent hover:border-t-transparent hover:border-l-transparent hover:border-r-riverBed">
						{line.map((word, w_index) =>
							renderWord({ word, addspace: w_index !== line.length })
						)}
					</span>
					{index != mappedLines.length && <br />}
				</>
			))}
		</div>
	);
}
