/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounceFunction = <T extends (...args: any[]) => void>(
	callback: T,
	delay: number = 500
) => {
	let timer: NodeJS.Timeout | null = null;
	return (...args: Parameters<T>) => {
		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			callback(...args);
		}, delay);
	};
};
