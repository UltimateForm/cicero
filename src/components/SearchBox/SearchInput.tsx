import { ChangeEventHandler } from "react";

export function SearchInput(props: {
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}) {
	return (
		<input
			value={props.value}
			type="text"
			className="focus:outline-none min-h-10 lg:min-h-14 w-max lg:w-96 bg-pattensBlue border-4 rounded-3xl box-border text-riverBed border-riverBed pl-4 pr-4"
			placeholder="Search"
			onChange={props.onChange}
		/>
	);
}
