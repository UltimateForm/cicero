import React from "react";

export function BackgroudGray800(props:{children: React.ReactNode}) {
	const {children} = props;
	return (
		<div className="bg-ebonyClay h-full w-full text-white">
			{children}
		</div>
	)
}