import React from "react";
import stopwords from "utils/stopwords";
import { select, deselect } from "features/wordSelection";
import { useAppDispatch, useStoreSelector } from "hooks/store";
import classnames from "classnames";

export interface IWordControllerProps {
	word: string;
	addspace: boolean;
}

export interface IWordProps extends IWordControllerProps {
	onClick: (word: IWordControllerProps["word"]) => void;
	isSelected: boolean;
}

export function Word(props: IWordProps) {
	const { word, addspace, onClick, isSelected } = props;
	const selectionClassName = React.useMemo(
		() =>
			stopwords.includes(word)
				? ""
				: "cursor-pointer " +
				  (isSelected ? "bg-goldenGrass" : "hover:bg-riverBed"),
		[word, isSelected]
	);

	return (
		<>
			<span
				className={classnames(
					selectionClassName,
					"transition-colors ease-in-out duration-300"
				)}
				onClick={() => {
					onClick(word);
				}}
			>
				{word}
			</span>
			{addspace && <> </>}
		</>
	);
}

export function WordController(props: IWordControllerProps) {
	const { word } = props;
	const selectedWord = useStoreSelector((state) => state.wordSelection.value);
	const dispatch = useAppDispatch();
	const onClick = React.useCallback<IWordProps["onClick"]>(
		(word: string) => {
			if (!stopwords.includes(word)) {
				if (selectedWord === word) dispatch(deselect());
				else dispatch(select(word));
			}
		},
		[word, selectedWord]
	);
	return (
		<Word {...props} isSelected={selectedWord === word} onClick={onClick} />
	);
}
