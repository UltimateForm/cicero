type MetaType = Partial<Record<"date" | "mood" | "inner" | "outer", string>>;

const images: { [key in keyof MetaType]: string } = {
	date: "images/calendar.png",
	mood: "images/brain.png",
	inner: "images/inner.png",
	outer: "images/outer.png",
};

export function Meta(props: MetaType) {
	const { date, mood, inner, outer } = props;

	return (
		<div className="flex flex-col items-end pr-8 absolute bottom-2 right-0 text-base">
			{date && (
				<div className="flex flex-row items-center">
					<span className="mr-2">{date}</span>
					<img src={images.date} width="25" height="25" alt="Calendar Icon" />
				</div>
			)}
			{mood && (
				<div className="flex flex-row items-center">
					<span className="mr-2">{mood}</span>
					<img src={images.mood} width="25" height="25" alt="Calendar Icon" />
				</div>
			)}
			{inner && (
				<div className="flex flex-row items-center">
					<span className="mr-2">{inner}</span>
					<img src={images.inner} width="25" height="25" alt="Calendar Icon" />
				</div>
			)}
			{outer && (
				<div className="flex flex-row items-center">
					<span>{outer}</span>
					<img src={images.outer} width="25" height="25" alt="Calendar Icon" />
				</div>
			)}
		</div>
	);
}

export function MetaController() {
	return <Meta date="Somewhere in last year" mood="Reminiscing about things" inner="At peace" outer="Apathetic perhaps"/>;
}
