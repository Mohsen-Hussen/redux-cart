import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
	reducer: { ui: uiReducer, cart: cartReducer },
});
