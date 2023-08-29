import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartLineItem {
	id: string;
	title: string;
	price: number;
	quantity: number;
	image: string;
}

interface CartInterface {
	showCart: boolean;
	items: CartLineItem[];
	totalItemCount: number;
	totalPrice: number;
}

const initialState: CartInterface = {
	showCart: false,
	items: [],
	totalItemCount: 0,
	totalPrice: 0,
};
const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		showCartDrawer: (state) => {
			state.showCart = true;
		},
		hideCartDrawer: (state) => {
			state.showCart = false;
		},
		addToCart: (state, action: PayloadAction<CartLineItem>) => {
			const existingProduct = state.items.find(
				(product) => product.id === action.payload.id
			);

			if (existingProduct) {
				const productIndex = state.items.findIndex(
					(product) => product.id === action.payload.id
				);

				const updatedProduct = {
					...existingProduct,
					quantity:
						action.payload.quantity + existingProduct.quantity,
				};

				state.items[productIndex] = updatedProduct;
			} else {
				state.items.push(action.payload);
			}
		},
		removeToCart: (state, action: PayloadAction<{ id: string }>) => {
			const productIndex = state.items.findIndex(
				(product) => product.id === action.payload.id
			);

			if (state.items[productIndex].quantity > 1) {
				state.items[productIndex].quantity - 1;
			} else {
				state.items = state.items.filter(
					(product) => product.id !== action.payload.id
				);
			}
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
