import React from "react";
import { Poem } from "types";
import { TextAssemblerController } from "./TextAssembler";

type IPoemViewProps = Pick<Poem, "body"|"title">; 

export function PoemView(props:IPoemViewProps){
	const {body, title} = props;
	return(
		<TextAssemblerController text={body} />
	)
}