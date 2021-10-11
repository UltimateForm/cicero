import React, { Fragment } from "react";
import { splitByLine, splitByWord } from "utils/text";
import classnames from "classnames";
import { useStoreSelector } from "hooks/store";
import { WordController } from "./Word";

interface ITextAssemblerProps extends ITextAssemblerControllerProps {
	selectedWord: string;
}

interface ITextAssemblerControllerProps {
	text: string;
}

export function TextAssembler(props: ITextAssemblerProps) {
	const { text, selectedWord } = props;
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
						key={index}
						className={classnames(
							line.includes(selectedWord) ? "selectedWord" : "",
							"pr-2 hover:border-r-2 hover:border-b-transparent hover:border-t-transparent hover:border-l-transparent hover:border-r-riverBed"
						)}
					>
						{line.map((word, w_index) => (
							<WordController
								key={`word-${w_index}`}
								word={word}
								addspace={w_index !== line.length}
							/>
						))}
					</span>
					{index !== mappedLines.length && <br key={`br-${index}`} />}
				</Fragment>
			))}
		</div>
	);
}

export function TextAssemblerController(props: ITextAssemblerControllerProps) {
	const selectedWord = useStoreSelector((state) => state.wordSelection.value);
	return <TextAssembler {...props} selectedWord={selectedWord} />;
}
