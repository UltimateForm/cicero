import { useAppDispatch, useStoreSelector } from "hooks/store";
import { Poem } from "types";
import { PoemView } from "../PoemView";
import styles from "./PoemLadder.module.css";
import classnames from "classnames";
import { DOMAttributes } from "react";
import { deselect } from "features/wordSelection";
import { Button, IButtonProps } from "components/Button";
import React from "react";

interface IPoemLadderProps {
	poems: Poem[];
	staged: number;
	onScroll: DOMAttributes<HTMLDivElement>["onScroll"];
	onClickLoadMore: IButtonProps["onClick"];
}

export function PoemLadder(props: IPoemLadderProps) {
	const { poems, staged, onScroll, onClickLoadMore } = props;
	return (
		<div
			className={classnames(styles.container, "h-screen overflow-y-scroll s")}
			onScroll={onScroll}
		>
			{poems.map((poem, index) => (
				<div
					key={index}
					className={classnames(
						styles.poem,
						"pl-10 min-h-screen flex place-content-center place-items-center"
					)}
				>
					<PoemView {...poem} />
				</div>
			))}
			<Button className={styles.button} onClick={onClickLoadMore}>
				Load More
			</Button>
		</div>
	);
}

export function PoemLadderController() {
	const [maxPoems, setMaxPoems] = React.useState(5);
	const library = useStoreSelector((state) => state.library);
	const wordSelected = useStoreSelector((state) => state.wordSelection.value);
	const dispatch = useAppDispatch();
	const onScroll: IPoemLadderProps["onScroll"] = (event) => {
		if (wordSelected) dispatch(deselect());
	};
	const onClickLoadMore: IPoemLadderProps["onClickLoadMore"] = (event) => {
		setMaxPoems((current) => current + 5);
	};
	return (
		<PoemLadder
			poems={library.value.slice(0, maxPoems)}
			staged={library.staged}
			onScroll={onScroll}
			onClickLoadMore={onClickLoadMore}
		/>
	);
}
