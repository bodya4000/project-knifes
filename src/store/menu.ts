import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
	open: boolean;
}

const initialState: MenuState = {
	open: false,
};

const menu = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		changeMenuState: state => {
			state.open = state.open ? false : true;
		},
	},
});

export const { changeMenuState } = menu.actions;
export default menu.reducer;
