import { useStoreSelector } from "hooks/store";
import styles from "./DataBox.module.css";

interface IDataBoxProps {
	title: string;
	summary: string;
	image: string;
}

export function DataBox(props: IDataBoxProps) {
	const { title, summary, image } = props;
	return (
		<div className="flex flex-col items-end absolute right-0 self-baseline w-2/5 place-content-between">
			<span className="mr-2 self-start">{title}</span>
			<div className="ml-10 mt-10 h-full relative">
				<div
					className="absolute top-0 right-0 bottom-0 left-0 bg-cover"
					style={{ backgroundImage: `url(${image})` }}
				>
					<div className={styles.dataBoxImageGradient} />
				</div>
				<div className="flex p-1 place-items-center relative w-2/3 h-full">
					{summary}
				</div>
			</div>
		</div>
	);
}

export function DataBoxController() {
	const selectedWord = useStoreSelector((state) => state.wordSelection.value);
	const title = "Green pigments found in plants, algae and bacteria";
	const summary =
		'Chlorophyll is any of several related green pigments found in the mesosomes of cyanobacteria and in the chloroplasts of algae and plants. Its name is derived from the Greek words χλωρός, khloros and φύλλον, phyllon ("leaf"). Chlorophyll is essential in photosynthesis, allowing plants to absorb energy from light.';
	const image =
		"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/M%C3%A9lisse_Feuilles_FR_2013b.jpg/320px-M%C3%A9lisse_Feuilles_FR_2013b.jpg";
	return <DataBox title={title} summary={summary} image={image} />;
}
