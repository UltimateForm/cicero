import classnames from "classnames";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import styles from "./Header.module.css";

// @TODO: map routes
export function Header() {
	const router = useRouter();
	const pathName = router.pathname;
	return (
		<div
			className={classnames(
				styles.header,
				"flex flex-row items-center fixed top-0 right-0 bg-ebonyClay lg:left-auto left-0"
			)}
		>
			<Link href="/">
				<a
					className={classnames(
						pathName === "/" ? styles.currentRoute : "",
						"lg:even:ml-12 lg:even:mr-12"
					)}
				>
					Home
				</a>
			</Link>
			<Link href="/about">
				<a
					className={classnames(
						pathName === "/about" ? styles.currentRoute : "",
						"lg:even:ml-12 lg:even:mr-12"
					)}
				>
					About
				</a>
			</Link>
			<Link href="/search">
				<a
					className={classnames(
						pathName === "/search" ? styles.currentRoute : "",
						"lg:even:ml-12 lg:even:mr-12"
					)}
				>
					Search
				</a>
			</Link>
			<Link href="/library">
				<a
					className={classnames(
						pathName === "/library" ? styles.currentRoute : "",
						"lg:even:ml-12 lg:even:mr-12"
					)}
				>
					Library
				</a>
			</Link>
		</div>
	);
}
