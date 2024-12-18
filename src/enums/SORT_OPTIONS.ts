export enum SORT_OPTIONS {
	POPULAR = 'popular',
	RATING = 'rating',
	PRICE = 'price',
}

export const SORT_OPTION_DETAILS = {
	[SORT_OPTIONS.POPULAR]: { backValue: 'popular', frontValue: 'By Popular' },
	[SORT_OPTIONS.RATING]: { backValue: 'rating', frontValue: 'By Rating' },
	[SORT_OPTIONS.PRICE]: { backValue: 'price', frontValue: 'By Price' },
};
