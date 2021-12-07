import { SearchInput } from "components/SearchBox";
import { useStoreSelector } from "hooks/store";
import Link from "next/link";
import React from "react";
import lodashFilter from "lodash.filter";

export function SearchView() {
	const [value, setValue] = React.useState("");
	const library = useStoreSelector((state) => state.library);
	const items = React.useMemo(() => {
		const searchResult = lodashFilter(
			library.value,
			(poem) =>
				poem.body.toLowerCase().includes(value.toLowerCase()) ||
				poem.title.toLowerCase().includes(value.toLowerCase())
		);
		return searchResult;
	}, [value]);
	return (
		<div className="h-full w-full flex items-center content-start pt-2 flex-col">
			<SearchInput
				value={value}
				onChange={(event) => {
					setValue(event.currentTarget.value);
				}}
			/>
			{value && (
				<span className="text-xs lg:text-sm">{items?.length} poems</span>
			)}
			{value && (
				<div className="flex flex-wrap shadow-top-bottom-inner pt-2 mt-2 justify-center overflow-y-scroll">
					{items?.map((poem, index) => (
						<Link
							key={`${poem?.title}-${index}`}
							href={escape(`library/${poem.title}`)}
						>
							<a className="border border-pattensBlue rounded-md m-1 p-1 h-fit-content w-fit-content">
								{poem.title}
							</a>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
