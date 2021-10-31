import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Poem } from "types";

interface ILibraryState {
	value: Poem[];
	status: "idle" | "loading" | "loaded";
	staged: number;
}

export const loadLibrary = createAsyncThunk("library/status", async () => {
	const libraryFetch = await fetch("/library.json");
	const json = await libraryFetch.json();
	return Promise.resolve(json);
});

const initialState: ILibraryState = { value: [], status: "idle", staged: 0 };

export const librarySlice = createSlice({
	name: "library",
	initialState,
	reducers: {
		stage: (state, action: PayloadAction<number>) => {
			state.staged = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(loadLibrary.pending, (state) => {
			state.status = "loading";
		});
		builder.addCase(loadLibrary.fulfilled, (state, action) => {
			state.value = action.payload;
			state.status = "loaded";
		});
	}
});

export const { stage } = librarySlice.actions;
export default librarySlice.reducer;
