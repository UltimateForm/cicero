import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IWordSelectionState {
	value: string;
}

const initialState: IWordSelectionState = { value: "" };

export const wordSelectionSlice = createSlice({
	name: "selectedWord",
	initialState,
	reducers: {
		select: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
		deselect: (state) => {
			state.value = "";
		}
	}
});

export const { select, deselect } = wordSelectionSlice.actions;
export default wordSelectionSlice.reducer;
