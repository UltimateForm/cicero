import { useStoreSelector } from "hooks/store";
import React from "react";
import classnames from "classnames";
import { useGetTermDataQuery } from "services/summary";
import styles from "./DataBox.module.css";

interface IDataBoxProps {
	title: string;
	summary: string;
	image: string;
	id: number;
}

export function DataBox(props: IDataBoxProps) {
	const { title, summary, image, id } = props;
	const [transition, setTransition] = React.useState("");
	const [viewData, setViewData] = React.useState<
		Partial<Pick<IDataBoxProps, "title" | "summary" | "image">>
	>({});
	React.useEffect(() => {
		setTransition((_) => {
			setViewData({
				title,
				summary,
				image
			});
			console.log("hello? whats wrong");
			return "transition-none translate-x-full";
		});
	}, [id]);

	React.useEffect(() => {
		setTimeout(() => {
			if (title && transition === "transition-none translate-x-full")
				setTransition("transition-transform translate-x-0");
		}, 100);
	}, [transition, id]);

	return (
		<div className="flex flex-col items-end absolute right-0 self-baseline w-2/5 place-content-between">
			<span
				className={classnames(
					transition,
					"ease-in-out duration-200 transform mr-2 self-start"
				)}
			>
				{viewData.title}
			</span>
			<div
				className={classnames(
					transition,
					"ease-in-out duration-300 ml-10 mt-10 h-full relative"
				)}
			>
				<div
					className="absolute top-0 right-0 bottom-0 left-0 bg-cover"
					style={
						viewData.image && { backgroundImage: `url(${viewData.image})` }
					}
				>
					<div className={styles.dataBoxImageGradient} />
				</div>
				<div className="flex p-1 place-items-center relative w-2/3 h-full">
					{viewData.summary}
				</div>
			</div>
		</div>
	);
}

export function DataBoxController() {
	const selectedWord = useStoreSelector((state) => state.wordSelection.value);
	const { data, error, isLoading } = useGetTermDataQuery(selectedWord, {
		skip: selectedWord === undefined || selectedWord === ""
	});
	if (!data || error || isLoading) {
		return null;
	}

	return (
		<DataBox
			id={data.pageid}
			title={data.description || data.title || selectedWord}
			summary={data.extract}
			image={data.thumbnail?.source}
		/>
	);
}
