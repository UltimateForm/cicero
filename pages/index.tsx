import { SummaryController } from "components/Summary";
// Import { SteppedLineToProps } from "react-lineto";
// import dynamic from "next/dynamic";
import { useStoreSelector } from "hooks/store";
import { PoemLadderController } from "components/PoemLadder/PoemLadder";

// Const DynamicSteppedLineTo = dynamic<SteppedLineToProps>(
// 	async () => import("react-lineto").then((lib) => lib.SteppedLineTo),
// 	{
// 		ssr: false
// 	}
// );

export default function Home() {
	// Const selectedWord = useStoreSelector((state) => state.wordSelection.value);
	const library = useStoreSelector((state) => state.library);
	if (library.value.length === 0) {
		return null;
	}

	return (
		<div className="flex justify-between w-full">
			<PoemLadderController />
			<div className="bg-riverBed transition-colors ease-in-out duration-200 divider h-3/5 w-px absolute left-1/2 place-self-center" />
			<SummaryController />
			{/* <MetaController /> */}
			{/* {process.browser && selectedWord && (
				<DynamicSteppedLineTo
					key={selectedWord}
					from="selectedWord"
					to="divider"
					orientation="h"
					fromAnchor="right"
					borderColor="#4c5666"
					delay={0.000_01}
				/>
			)} */}
		</div>
	);
}
