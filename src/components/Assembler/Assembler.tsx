import classnames from "classnames";
import { WordController } from "components/Word";
import { useStoreSelector } from "hooks/store";
import React from "react";
import { ILineProps, Line, TextAssembler } from "react-text-assembler";

interface IAssemblerProps extends IAssemblerControllerProps {
	selectedWord: string;
}

interface IAssemblerControllerProps {
	text: string;
}

export function Assembler(props: IAssemblerProps) {
	const { text, selectedWord } = props;
	const LineComponent = (props: ILineProps) => {
		return (
			<Line
				{...props}
				className={classnames(
					props.line.includes(selectedWord) ? "selectedWord" : "",
					"pr-2 hover:border-r-2 hover:border-b-transparent hover:border-t-transparent hover:border-l-transparent hover:border-r-riverBed"
				)}
			/>
		);
	};

	return (
		<div>
			<TextAssembler
				lineComponent={LineComponent}
				wordComponent={WordController}
				text={text}
			/>
		</div>
	);
}

export function AssemblerController(props: IAssemblerControllerProps) {
	const selectedWord = useStoreSelector((state) => state.wordSelection.value);
	return <Assembler {...props} selectedWord={selectedWord} />;
}
