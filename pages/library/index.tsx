import { useStoreSelector } from "hooks/store";
import Link from "next/link";

export default function Library() {
	const library = useStoreSelector((state) => state.library);

	return (
		<div className="flex flex-row flex-wrap pt-16 h-screen overflow-y-scroll">
			{library.value.map((poem, index) => (
				<Link key={`${poem?.title}-${index}`} href={`library/${poem.title}`}>
					<a className="border border-pattensBlue rounded-md m-1 p-1">
						{poem.title}
					</a>
				</Link>
			))}
		</div>
	);
}
