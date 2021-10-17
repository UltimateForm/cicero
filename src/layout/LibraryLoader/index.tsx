import { loadLibrary } from "features/library";
import { useAppDispatch } from "hooks/store";
import React from "react";

export function LibraryLoader(props: { children: React.ReactNode }) {
	const dispatch = useAppDispatch();
	React.useEffect(() => {
		dispatch(loadLibrary());
	}, []);
	return <>{props.children}</>;
}
