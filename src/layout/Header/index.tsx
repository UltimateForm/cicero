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
				"flex flex-row items-center absolute top-0 right-0 bg-ebonyClay"
			)}
		>
			<Link href="/">
				<a
					className={classnames(
						pathName === "/" ? styles.currentRoute : "",
						"even:ml-12 even:mr-12"
					)}
				>
					Home
				</a>
			</Link>
			<Link href="/about">
				<a
					className={classnames(
						pathName === "/about" ? styles.currentRoute : "",
						"even:ml-12 even:mr-12"
					)}
				>
					About
				</a>
			</Link>
			<Link href="/search">
				<a
					className={classnames(
						pathName === "/search" ? styles.currentRoute : "",
						"even:ml-12 even:mr-12"
					)}
				>
					Search
				</a>
			</Link>
			<Link href="/library">
				<a
					className={classnames(
						pathName === "/library" ? styles.currentRoute : "",
						"even:ml-12 even:mr-12"
					)}
				>
					Library
				</a>
			</Link>
		</div>
	);
}
