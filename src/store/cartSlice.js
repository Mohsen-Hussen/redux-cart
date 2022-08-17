import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	totalQuantity: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItemToCart: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			state.totalQuantity += 1;
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					name: newItem.title,
					price: newItem.price,
					totalPrice: newItem.price,
					quantity: 1,
				});
			} else {
				existingItem.quantity += 1;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price;
			}
		},
		removeItemFromCart: (state, action) => {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			state.totalQuantity -= 1;
			if (existingItem.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				existingItem.quantity -= 1;
				existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
