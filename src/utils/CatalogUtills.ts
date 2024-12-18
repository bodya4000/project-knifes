import { debounce } from 'lodash';

export const debounceFunction = (callback: (_: number|undefined, __: number|undefined) => void) => {
	return debounce(callback, 500);
};
