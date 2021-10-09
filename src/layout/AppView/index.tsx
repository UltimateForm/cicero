import React from "react";

export function FullScreen(props: { children: React.ReactNode }) {
	const { children } = props;
	return <div className="h-screen flex items-center p-5">{children}</div>;
}