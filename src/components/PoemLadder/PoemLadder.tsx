import { useAppDispatch, useStoreSelector } from "hooks/store";
import { Poem } from "types";
import classnames from "classnames";
import React, { DOMAttributes } from "react";
import { deselect } from "features/wordSelection";
import { PoemView } from "../PoemView";
import styles from "./PoemLadder.module.css";

interface IPoemLadderProps {
	poems: Poem[];
	staged: number;
	onScroll: DOMAttributes<HTMLDivElement>["onScroll"];
	ladderRef?: React.MutableRefObject<HTMLDivElement>;
}

export function PoemLadder(props: IPoemLadderProps) {
	const { poems, onScroll, ladderRef } = props;
	return (
		<div
			ref={ladderRef}
			className={classnames(styles.container, "h-screen overflow-y-scroll")}
			onScroll={onScroll}
		>
			{poems.map((poem, index) => (
				<div
					key={index}
					className={classnames(
						styles.poem,
						"pl-10 min-h-screen flex  place-items-center"
					)}
				>
					<PoemView {...poem} />
				</div>
			))}{" "}
		</div>
	);
}

export function PoemLadderController() {
	const [maxPoems, setMaxPoems] = React.useState(5);
	const library = useStoreSelector((state) => state.library);
	const wordSelected = useStoreSelector((state) => state.wordSelection.value);
	const ladderRef = React.useRef<HTMLDivElement>();
	const dispatch = useAppDispatch();
	const onScroll: IPoemLadderProps["onScroll"] = (_) => {
		if (wordSelected) dispatch(deselect());
		if (ladderRef.current) {
			const bottom =
				ladderRef.current.scrollHeight - ladderRef.current.scrollTop ===
				ladderRef.current.clientHeight;
			if (bottom) {
				console.log("hello??");
				setMaxPoems((current) => current + 5);
			}
		}
	};

	return (
		<PoemLadder
			poems={library.value.slice(0, maxPoems)}
			staged={library.staged}
			ladderRef={ladderRef}
			onScroll={onScroll}
		/>
	);
}
