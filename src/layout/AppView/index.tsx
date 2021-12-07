import { Header } from "layout/Header";
import React from "react";

export function Fullscreen(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<div className="h-screen flex items-center justify-center p-5 text-sm md:text-xl xl:text-2xl pt-14">
			{children}
			<Header />
		</div>
	);
}
