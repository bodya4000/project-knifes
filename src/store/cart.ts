import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IKnifeCart, IKnifeOrder } from '../models/Knife';

interface CartState {
	products: { [signatureId: number]: IKnifeCart };
	totalPrice: number;
	totalCount: number;
}

const initialState: CartState = {
	products: {},
	totalPrice: 0,
	totalCount: 0,
};

const catalogOptions = createSlice({
	name: 'catalogOptions',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<IKnifeOrder>) {
			const { id, count, price } = action.payload;
			if (state.products[id]) {
				state.products[id].count += count;
				state.products[id].totalPrice += price * count;
			} else {
				state.products[id] = { ...action.payload, totalPrice: price * count };
			}
			state.totalPrice += price * count;
			state.totalCount += count;
		},

		addItemById(state, action: PayloadAction<number>) {
			let product = state.products[action.payload];
			product.count += 1;
			product.totalPrice += product.price;
			state.totalPrice += product.price;
		},
		removeItemById(state, action: PayloadAction<number>) {
			let product = state.products[action.payload];
			if (product.count > 1) {
				product.count -= 1;
				product.totalPrice -= product.price;
				state.totalPrice -= product.price;
			} else {
				delete state.products[action.payload];
				state.totalPrice -= product.price;
			}
		},
	},
});

export const { addToCart, addItemById, removeItemById } =
	catalogOptions.actions;
export default catalogOptions.reducer;
