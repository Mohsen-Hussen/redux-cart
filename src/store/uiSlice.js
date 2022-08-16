import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartIsVisible: false,
};

export const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		toggle: (state) => {
			state.cartIsVisible = !state.cartIsVisible;
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggle } = uiSlice.actions;

export default uiSlice.reducer;
