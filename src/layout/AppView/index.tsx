import { Header } from "layout/Header";
import React from "react";

export function Fullscreen(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<div className="h-screen flex items-center p-5">
			{children}
			<Header />
		</div>
	);
}
