import React, { Fragment } from "react";
import { splitByLine, splitByWord } from "utils/text";
import { IWordProps, Word } from "./Word";
import classnames from "classnames";
import { useStoreSelector } from "hooks/store";

interface ITextAssemblerProps {
	text: string;
}
export function TextAssembler(props: ITextAssemblerProps) {
	const { text } = props;
	const selectedWord = useStoreSelector((state) => state.wordSelection.value);
	const mappedLines = React.useMemo(() => {
		const lines = splitByLine(text).map((line) => {
			const words = splitByWord(line);
			return words;
		});
		return lines;
	}, [text]);
	return (
		<div key="isithis">
			{mappedLines.map((line, index) => (
				<Fragment key={`frag-${index}`}>
					<span
						className={classnames(
							line.includes(selectedWord) ? "selectedWord" : "",
							"A pr-2 hover:border-r-2 hover:border-b-transparent hover:border-t-transparent hover:border-l-transparent hover:border-r-riverBed"
						)}
						key={index}
					>
						{line.map((word, w_index) => (
							<Word
								word={word}
								addspace={w_index !== line.length}
								key={`word-${w_index}`}
							/>
						))}
					</span>
					{index != mappedLines.length && <br key={`br-${index}`} />}
				</Fragment>
			))}
		</div>
	);
}
