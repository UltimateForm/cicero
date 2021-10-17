import { configureStore } from "@reduxjs/toolkit";
import wordSelection from "features/wordSelection";
import library from "features/library";
import { summaryApi } from "services/summary";

const store = configureStore({
	reducer: {
		wordSelection,
		library,
		[summaryApi.reducerPath]: summaryApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(summaryApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
