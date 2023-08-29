import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showCart: false,
	items: [],
	totalItemCount: 0,
	totalPrice: 0,
};
const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		showCartDrawer: (state) => {
			state.showCart = true;
		},
		hideCartDrawer: (state) => {
			state.showCart = false;
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
