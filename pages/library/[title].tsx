import { useRouter } from "next/router";
import { PoemLadder } from "components/PoemLadder";
import { SummaryController } from "components/Summary";
import { useAppDispatch, useStoreSelector } from "hooks/store";
import React from "react";
import { deselect } from "features/wordSelection";

export default function Poem() {
	const router = useRouter();
	const { title } = router.query;
	const library = useStoreSelector((state) => state.library);
	const wordSelected = useStoreSelector((state) => state.wordSelection.value);
	const dispatch = useAppDispatch();
	const poem = React.useMemo(
		() =>
			library.value.find((p) => p.title.trim() === (title as string)?.trim()),
		[title]
	);
	React.useEffect(() => {
		if (wordSelected) dispatch(deselect());
		return () => {
			if (wordSelected) dispatch(deselect());
		};
	}, []);
	React.useEffect(() => {
		if (poem?.title) return;
		(async function () {
			if (process.browser) await router.push("/library");
		})();
	}, [poem, poem?.title, title]);
	if (poem?.title) {
		return (
			<div className="flex justify-between w-full min-h-full items-center">
				<PoemLadder
					poems={[poem]}
					staged={library.staged}
					onScroll={() => {
						/* ignore */
					}}
				/>
				<div className="bg-riverBed transition-colors ease-in-out duration-200 divider h-3/5 w-px absolute left-1/2 place-self-center" />
				<SummaryController />
			</div>
		);
	}

	return null;
}
// Return(<div>{title}{poem.body}</div>)
