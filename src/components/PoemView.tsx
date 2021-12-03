import React from "react";
import { Poem } from "types";
import { AssemblerController } from "./Assembler";

type IPoemViewProps = Pick<Poem, "body" | "title" | "date">;

export function PoemView(props: IPoemViewProps) {
	const { body, title, date } = props;
	return (
		<div className="w-full flex flex-col">
			<AssemblerController text={body} />
			<strong className="self-end mr-2 mt-4">{title}</strong>
			<strong className="self-end mr-2">{date}</strong>
		</div>
	);
}
