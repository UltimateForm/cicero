import { useAppDispatch, useStoreSelector } from "hooks/store";
import { Poem } from "types";
import { PoemView } from "../PoemView";
import styles from "./PoemLadder.module.css";
import classnames from "classnames";
import { DOMAttributes } from "react";
import { deselect } from "features/wordSelection";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";

interface IPoemLadderProps {
	poems: Poem[];
	staged: number;
	onScroll: DOMAttributes<HTMLDivElement>["onScroll"];
	ladderRef?: React.MutableRefObject<HTMLDivElement>;
}

export function PoemLadder(props: IPoemLadderProps) {
	const { poems, staged, onScroll, ladderRef } = props;
	return (
		<Scrollbars
			style={{ scrollbarWidth: "thin" }}
			renderView={(props) => (
				<div
					className={classnames(styles.container, "h-screen overflow-y-scroll")}
					onScroll={onScroll}
					ref={ladderRef}
				>
					{props.children}
				</div>
			)}
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
			))}
		</Scrollbars>
	);
}

export function PoemLadderController() {
	const [maxPoems, setMaxPoems] = React.useState(5);
	const library = useStoreSelector((state) => state.library);
	const wordSelected = useStoreSelector((state) => state.wordSelection.value);
	const ladderRef = React.useRef<HTMLDivElement>();
	const dispatch = useAppDispatch();
	const onScroll: IPoemLadderProps["onScroll"] = (event) => {
		if (wordSelected) dispatch(deselect());
		if (ladderRef.current) {
			const bottom =
				ladderRef.current.scrollTop === (ladderRef.current as any).scrollTopMax;
			console.log(
				ladderRef.current.scrollTop,
				(ladderRef.current as any).scrollTopMax
			);
			if (bottom) {
				setMaxPoems((current) => current + 5);
			}
		}
	};

	return (
		<PoemLadder
			poems={library.value.slice(0, maxPoems)}
			staged={library.staged}
			onScroll={onScroll}
			ladderRef={ladderRef}
		/>
	);
}
