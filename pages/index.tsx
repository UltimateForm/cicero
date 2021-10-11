import { TextAssemblerController } from "components/TextAssembler";
import { DataBoxController } from "components/DataBox";
import { MetaController } from "components/Meta";
import { SteppedLineToProps } from "react-lineto";
import dynamic from "next/dynamic";
import { useStoreSelector } from "hooks/store";
import classnames from "classnames";

const DynamicSteppedLineTo = dynamic<SteppedLineToProps>(
	async () => import("react-lineto").then((lib) => lib.SteppedLineTo),
	{
		ssr: false
	}
);

const poem_txt =
	"chlorophyll?\ningestion\na jester's defection\nthat deduced a spruce off the tundra\na master's umbrage...\nin a moon he lost northumbria\nthrottling the pedal off his wheel\nparamount, or paranoid, or a stoic paragraph\nin the life of the xenomorph\nwithout a mold\nno outpost\nno outgrow\njust radioactive glow.\n\nautomobile?\nyes, congestion";
export default function Home() {
	const selectedWord = useStoreSelector((state) => state.wordSelection.value);
	console.log("selectedWord", selectedWord);
	return (
		<div className="flex justify-between w-full">
			<TextAssemblerController text={poem_txt} />
			<div
				className={classnames(
					selectedWord ? "bg-goldenGrass" : "bg-riverBed",
					"transition-colors ease-in-out duration-200 divider h-3/5 w-px absolute left-1/2"
				)}
			/>
			<DataBoxController />
			<MetaController />
			{process.browser && selectedWord && (
				<DynamicSteppedLineTo
					key={selectedWord}
					from="selectedWord"
					to="divider"
					orientation="h"
					fromAnchor="right"
					borderColor="#dea01e"
					delay={0.000_01}
				/>
			)}
		</div>
	);
}
