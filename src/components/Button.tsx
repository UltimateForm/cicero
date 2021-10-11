import { MouseEventHandler } from "react";
import classnames from "classnames";

interface IButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
	href?: string;
	className?: string;
}

export function Button(props: IButtonProps) {
	const { children, onClick, className, href } = props;
	const buttonClassNames = classnames(
		className,
		"mix-blend-hard-light bg-riverBed border border-pattensBlue box-border rounded-lg hover:bg-goldenGrass transition-colors duration-300 ease-in-out"
	);
	if (href) {
		return (
			<a
				className={buttonClassNames}
				href={href}
				target="_blank"
				referrerPolicy="no-referrer"
				rel="noreferrer"
			>
				{children}
			</a>
		);
	}

	return (
		<button type="button" className={buttonClassNames} onClick={onClick}>
			{children}
		</button>
	);
}
