import React from "react";

export function BackgroudGray(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<div className="bg-ebonyClay h-full w-full text-white">{children}</div>
	);
}
