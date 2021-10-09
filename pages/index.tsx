import Head from "next/head";
import htmlParse from "html-react-parser";
import { TextAssembler } from "components/TextAssembler";
import { Word } from "components/Word";
import { DataBox, DataBoxController } from "components/DataBox";
import { MetaController } from "components/Meta";

const poem_txt =
	"chlorophyll?\ningestion\na jester's defection\nthat deduced a spruce off the tundra\na master's umbrage...\nin a moon he lost northumbria\nthrottling the pedal off his wheel\nparamount, or paranoid, or a stoic paragraph\nin the life of the xenomorph\nwithout a mold\nno outpost\nno outgrow\njust radioactive glow.\n\nautomobile?\nyes, congestion";
const Poem = htmlParse(poem_txt.replace(/(?:\r\n|\r|\n)/g, "<br>"));
export default function Home() {
	return (
		<div className="flex justify-between w-full">
			<TextAssembler
				text={poem_txt}
				renderWord={(props) => <Word {...props} />}
			/>
			<div className="h-3/5 bg-riverBed w-px absolute right-1/2"/>
			<DataBoxController />
			<MetaController />
		</div>
	);
}
