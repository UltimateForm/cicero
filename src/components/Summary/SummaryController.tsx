import { useStoreSelector } from "hooks/store";
import React from "react";
import { useGetTermDataQuery } from "services/summary";
import { WikipediaLoading } from "components/WikiepediaLoader/WikipediaLoader";
import { Summary } from "./Summary";

export function SummaryController() {
	const selectedWord = useStoreSelector((state) => state.wordSelection.value);
	const { data, error, isLoading, isFetching } = useGetTermDataQuery(
		selectedWord,
		{
			skip: selectedWord === undefined || selectedWord === ""
		}
	);

	if (isFetching || isLoading) {
		return <WikipediaLoading />;
	}

	if (!data || error || !selectedWord) {
		return null;
	}

	return (
		<Summary
			id={data.pageid}
			title={data.description || data.title || selectedWord}
			summary={data.extract}
			image={data.thumbnail?.source}
			desambiguationPortal={data.desambiguationPortal}
			content_urls={data.content_urls}
		/>
	);
}
