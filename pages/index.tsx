import Head from "next/head";
import htmlParse from "html-react-parser";
import { TextAssembler } from "components/TextAssembler";
import { IWordProps, Word } from "components/Word";
import { DataBox, DataBoxController } from "components/DataBox";
import { MetaController } from "components/Meta";
import LineTo, {
	LineToProps,
	SteppedLineProps,
	SteppedLineTo,
	SteppedLineToProps,
} from "react-lineto";
import dynamic from "next/dynamic";
import { useStoreSelector } from "hooks/store";
import { PropsWithChildren } from "react";

const DynamicSteppedLineTo = dynamic<SteppedLineToProps>(
	() => import("react-lineto").then((lib) => lib.SteppedLineTo),
	{
		ssr: false,
	}
);

const poem_txt =
	"chlorophyll?\ningestion\na jester's defection\nthat deduced a spruce off the tundra\na master's umbrage...\nin a moon he lost northumbria\nthrottling the pedal off his wheel\nparamount, or paranoid, or a stoic paragraph\nin the life of the xenomorph\nwithout a mold\nno outpost\nno outgrow\njust radioactive glow.\n\nautomobile?\nyes, congestion";
const Poem = htmlParse(poem_txt.replace(/(?:\r\n|\r|\n)/g, "<br>"));
export default function Home() {
	const selectedWord = useStoreSelector((state) => state.wordSelection.value);
	console.log("selectedWord", selectedWord);
	return (
		<div className="flex justify-between w-full">
			<TextAssembler text={poem_txt} />
			<div className="divider h-3/5 bg-riverBed w-px absolute right-1/2" />
			<DataBoxController />
			<MetaController />
			{process.browser && selectedWord && (
				<DynamicSteppedLineTo
					key={selectedWord}
					from="selectedWord"
					to="divider"
					orientation="h"
					fromAnchor="right"
					borderColor="#4c5666"
					delay={0.00001}
				/>
			)}
		</div>
	);
}
