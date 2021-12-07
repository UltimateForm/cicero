import { useStoreSelector } from "hooks/store";
import Link from "next/link";

export function LibraryView() {
	const library = useStoreSelector((state) => state.library);

	return (
		<div className="flex flex-row flex-wrap max-h-full overflow-y-scroll">
			{library.value.map((poem, index) => (
				<Link
					key={`${poem?.title}-${index}`}
					href={escape(`library/${poem.title}`)}
				>
					<a className="border border-pattensBlue rounded-md m-1 p-1">
						{poem.title}
					</a>
				</Link>
			))}
		</div>
	);
}
