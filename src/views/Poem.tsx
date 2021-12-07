import { useRouter } from "next/router";
import { PoemLadder } from "components/PoemLadder";
import { SummaryController } from "components/Summary";
import { useAppDispatch, useStoreSelector } from "hooks/store";
import React from "react";
import { deselect } from "features/wordSelection";
import { Divider } from "components/Divider";
import useMediaQuery from "hooks/useMediaQuery";

export function PoemPageView() {
	const router = useRouter();
	const { title } = router.query;
	const library = useStoreSelector((state) => state.library);
	const wordSelected = useStoreSelector((state) => state.wordSelection.value);
	const isDesktop = useMediaQuery("(min-width: 1024px)");
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
		if (poem?.title || library.status === "idle") return;
		(async function () {
			console.log("poem", title);
			if (process.browser) await router.push("/library");
		})();
	}, [poem, poem?.title, title]);
	if (poem?.title) {
		return (
			<div className="flex justify-between w-full min-h-full items-center md">
				<PoemLadder
					poems={[poem]}
					staged={library.staged}
					onScroll={() => {
						/* ignore */
					}}
				/>
				<Divider />
				{isDesktop && <SummaryController />}
			</div>
		);
	}

	return null;
}
