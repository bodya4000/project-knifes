import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SORT_OPTION_DETAILS, SORT_OPTIONS } from '../enums/SORT_OPTIONS';
import { CatalogInterval } from '../models/Catalog';

interface CatalogState {
	price: CatalogInterval;
	manufacturer: string | undefined;
	steel: string | undefined;
	handle: string | undefined;
	guard: string | undefined;
	totalLength: CatalogInterval;
	bladeLength: CatalogInterval;
	bladeWidth: CatalogInterval;
	rating: number | undefined;
	sort: { backValue: string; frontValue: string };
	optionLoaded: boolean;
}

const initialState: CatalogState = {
	price: {
		min: 0,
		max: 0,
		currentMax: 0,
		currentMin: 0,
	},
	manufacturer: undefined,
	steel: undefined,
	handle: undefined,
	guard: undefined,
	totalLength: {
		min: 0,
		max: 0,
		currentMax: 0,
		currentMin: 0,
	},
	bladeLength: {
		min: 0,
		max: 0,
		currentMax: 0,
		currentMin: 0,
	},
	bladeWidth: {
		min: 0,
		max: 0,
		currentMax: 0,
		currentMin: 0,
	},
	rating: undefined,
	sort: {
		backValue: SORT_OPTION_DETAILS[SORT_OPTIONS.POPULAR].backValue,
		frontValue: SORT_OPTION_DETAILS[SORT_OPTIONS.POPULAR].frontValue,
	},
	optionLoaded: false,
};

const catalogOptions = createSlice({
	name: 'catalogOptions',
	initialState,
	reducers: {
		setPrice(state, action: PayloadAction<CatalogInterval>) {
			if (action.payload.currentMax) state.price.currentMax = action.payload.currentMax;
			if (action.payload.currentMin) state.price.currentMin = action.payload.currentMin;
			if (action.payload.max) state.price.max = action.payload.max;
			if (action.payload.min) state.price.min = action.payload.min;
		},
		setManufacturer(state, action: PayloadAction<string>) {
			state.manufacturer = action.payload;
		},
		setSteel(state, action: PayloadAction<string>) {
			state.steel = action.payload;
		},
		setHandle(state, action: PayloadAction<string>) {
			state.handle = action.payload;
		},
		setGuard(state, action: PayloadAction<string>) {
			state.guard = action.payload;
		},
		setTotalLength(state, action: PayloadAction<CatalogInterval>) {
			if (action.payload.currentMax) state.totalLength.currentMax = action.payload.currentMax;
			if (action.payload.currentMin) state.totalLength.currentMin = action.payload.currentMin;
			if (action.payload.max) state.totalLength.max = action.payload.max;
			if (action.payload.min) state.totalLength.min = action.payload.min;
		},
		setBladeLength(state, action: PayloadAction<CatalogInterval>) {
			if (action.payload.currentMax) state.bladeLength.currentMax = action.payload.currentMax;
			if (action.payload.currentMin) state.bladeLength.currentMin = action.payload.currentMin;
			if (action.payload.max) state.bladeLength.max = action.payload.max;
			if (action.payload.min) state.bladeLength.min = action.payload.min;
		},
		setBladeWidth(state, action: PayloadAction<CatalogInterval>) {
			if (action.payload.currentMax) state.bladeWidth.currentMax = action.payload.currentMax;
			if (action.payload.currentMin) state.bladeWidth.currentMin = action.payload.currentMin;
			if (action.payload.max) state.bladeWidth.max = action.payload.max;
			if (action.payload.min) state.bladeWidth.min = action.payload.min;
		},
		setRating(state, action: PayloadAction<number>) {
			state.rating = action.payload;
		},
		setSort(state, action: PayloadAction<{ backValue: string; frontValue: string }>) {
			state.sort = action.payload;
		},
		setAttributeByKeyAndValue(state, action: PayloadAction<{ key: string; value: string }>) {
			switch (action.payload.key) {
				case 'manufactures':
					state.manufacturer = action.payload.value;
					break;
				case 'steels':
					state.steel = action.payload.value;
					break;
				case 'handles':
					state.handle = action.payload.value;
					break;
				case 'guards':
					state.guard = action.payload.value;
					break;
				default:
					break;
			}
		},
		setOptionsLoadedTrue(state) {
			state.optionLoaded = true;
		},
		clearManufacturer(state) {
			state.manufacturer = undefined;
		},
		clearSteel(state) {
			state.steel = undefined;
		},
		clearHandle(state) {
			state.handle = undefined;
		},
		clearGuard(state) {
			state.guard = undefined;
		},
		clearRating(state) {
			state.rating = undefined;
		},
		loading(state, action: PayloadAction<boolean>) {
			state.optionLoaded = action.payload;
		},
	},
});

export const {
	setPrice,
	setManufacturer,
	setSteel,
	setHandle,
	setGuard,
	setTotalLength,
	setBladeLength,
	setBladeWidth,
	setRating,
	setSort,
	setAttributeByKeyAndValue,
	setOptionsLoadedTrue,
	clearManufacturer,
	clearSteel,
	clearHandle,
	clearGuard,
	clearRating,

	loading,
} = catalogOptions.actions;
export default catalogOptions.reducer;
