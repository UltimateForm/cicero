import React from "react";
import { Poem } from "types";
import { AssemblerController } from "./Assembler";

type IPoemViewProps = Pick<Poem, "body" | "title">;

export function PoemView(props: IPoemViewProps) {
	const { body } = props;
	return <AssemblerController text={body} />;
}
