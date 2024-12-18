// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import catalogOptionReducer from './catalog';
import menuReducer from './menu';

export const store = configureStore({
	reducer: {
		menu: menuReducer,
		catalogOptions: catalogOptionReducer,
		cart: cartReducer,
	},
});

export type UserState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
