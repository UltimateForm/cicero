import { loadLibrary } from "features/library";
import { useAppDispatch } from "hooks/store";
import React from "react";

export function LibraryLoader(props: { children: React.ReactNode }) {
	const dispatch = useAppDispatch();
	React.useEffect(() => {
		(async function () {
			await dispatch(loadLibrary());
		})();
	}, []);
	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{props.children}</>;
}
