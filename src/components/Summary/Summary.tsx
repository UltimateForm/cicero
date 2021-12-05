import React from "react";
import classnames from "classnames";
import { Button } from "components/Button";
import type { ISummaryProps } from "./types";
import styles from "./Summary.module.css";

export function Summary(props: ISummaryProps) {
	const { title, summary, image, id, content_urls, desambiguationPortal } =
		props;
	const [transition, setTransition] = React.useState("");
	const [viewData, setViewData] = React.useState<
		Partial<Pick<ISummaryProps, "title" | "summary" | "image">>
	>({});
	React.useEffect(() => {
		setTransition((_) => {
			setViewData({
				title,
				summary,
				image
			});
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
		<div
			className={classnames(
				styles.root,
				"flex flex-col items-end fixed right-0 self-end w-2/5 content-start"
			)}
		>
			<span
				className={classnames(
					transition,
					"ease-in-out duration-200 transform mr-2 self-start content-start"
				)}
			>
				{viewData.title}
			</span>
			<div
				className={classnames(
					styles.summary,
					transition,
					"ease-in-out duration-300 ml-10 mt-10 relative"
				)}
			>
				<div
					className="absolute top-0 right-0 bottom-0 left-0 bg-cover"
					style={{
						backgroundImage: viewData.image && `url(${viewData.image})`,
						minHeight: "25vh"
					}}
				>
					<div className={styles.summaryImageGradient} />
				</div>
				<div className="flex p-1 place-items-start relative w-2/3 pr-2 h-full overflow-y-auto">
					<div className="place-items-start">{viewData.summary}</div>
				</div>
				<div className="absolute right-0 top-0 flex flex-col p-2">
					{content_urls?.desktop?.page && (
						<Button href={content_urls.desktop.page}>
							<img src="/images/wikipedia.png" alt="Wikipedia Icon" />
						</Button>
					)}
					{desambiguationPortal && (
						<Button className="mt-2" href={desambiguationPortal as string}>
							<img src="/images/unequal.png" alt="Wikipedia Icon" />
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
