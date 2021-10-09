import React from "react";
import stopwords from "utils/stopwords";
import { select, deselect } from "features/wordSelection";
import { useAppDispatch } from "hooks/store";

export interface IWordProps {
	word: string;
	addspace: boolean;
}

export function Word(props: IWordProps) {
	const { word, addspace } = props;
	const dispatch = useAppDispatch();
	const className = React.useMemo(
		() => (stopwords.includes(word) ? "" : "hover:bg-riverBed"),
		[word]
	);
	function onHoverEnter() {
		dispatch(select(word));
	}

	function onHoverExit() {
		dispatch(deselect());
	}

	return (
		<>
			<span
				className={className}
				onPointerEnter={() => onHoverEnter()}
				onPointerLeave={() => onHoverExit()}
			>
				{word}
			</span>
			{addspace && <> </>}
		</>
	);
}
