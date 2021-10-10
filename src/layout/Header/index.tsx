import styles from "./Header.module.css";
import classnames from "classnames";
import Link from "next/link";

export function Header() {
	const pd = "pt-2 pr-7 pb-20 pl-2";
	return (
		<div
			className={classnames(
				styles.header,
				"flex flex-row items-center absolute top-0 right-0 bg-ebonyClay"
			)}
		>
			<Link href="/">
				<a className="even:ml-12 even:mr-12">Home</a>
			</Link>
			<Link href="/about">
				<a className="even:ml-12 even:mr-12">About</a>
			</Link>
			<Link href="/search">
				<a className="even:ml-12 even:mr-12">Search</a>
			</Link>
			<Link href="/all">
				<a className="even:ml-12 even:mr-12">All</a>
			</Link>
		</div>
	);
}
