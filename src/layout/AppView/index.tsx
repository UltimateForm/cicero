import { Header } from "layout/Header";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";

export function Fullscreen(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<div className="h-screen flex items-center p-5">
			{children}
			<Header />
		</div>
	);
}
