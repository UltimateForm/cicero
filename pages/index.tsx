import { SummaryController } from "components/Summary";
// Import { SteppedLineToProps } from "react-lineto";
// import dynamic from "next/dynamic";
import { useStoreSelector } from "hooks/store";
import { PoemLadderController } from "components/PoemLadder/PoemLadder";
import { Divider } from "components/Divider";
import useMediaQuery from "hooks/useMediaQuery";
// Const DynamicSteppedLineTo = dynamic<SteppedLineToProps>(
// 	async () => import("react-lineto").then((lib) => lib.SteppedLineTo),
// 	{
// 		ssr: false
// 	}
// );

export default function Home() {
	// Const selectedWord = useStoreSelector((state) => state.wordSelection.value);
	const isDesktop = useMediaQuery("(min-width: 1024px)");
	const library = useStoreSelector((state) => state.library);
	if (library.value.length === 0) {
		return null;
	}

	return (
		<div className="flex justify-between w-full flex-col lg:flex-row">
			<PoemLadderController />
			<Divider />
			{isDesktop && <SummaryController />}
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
