import { useRouter } from "next/router";
import { PoemView } from "components/PoemView";
import { SummaryController } from "components/Summary";
import { useStoreSelector } from "hooks/store";
import React from "react";

export default function Poem() {
	const router = useRouter();
	const { title } = router.query;
	const library = useStoreSelector((state) => state.library);
	const poem = React.useMemo(
		() => library.value.find((p) => p.title === title),
		[title]
	);
	if (poem?.title) {
		return (
			<div className="flex justify-between w-1/2">
				<PoemView {...poem} />
				<div className="bg-riverBed transition-colors ease-in-out duration-200 divider h-3/5 w-px absolute left-1/2 place-self-center" />
				<SummaryController />
			</div>
		);
	}
	if (process.browser) router.push("/library");
	return null;
}
// return(<div>{title}{poem.body}</div>)
