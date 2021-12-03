import styles from "./WikipediaLoader.module.css";

export function WikipediaLoading() {
	return (
		<div className={styles.container}>
			<img
				className={styles.img}
				src="/images/w-alpha.png"
				alt="Wikipedia W logo"
			/>
		</div>
	);
}
