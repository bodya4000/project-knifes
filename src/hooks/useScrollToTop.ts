import { useEffect } from 'react';

const useScrollToTop = () => {
	useEffect(() => {
		const originalScrollRestoration = history.scrollRestoration;
		history.scrollRestoration = 'manual';
		window.scrollTo(0, 0);
		return () => (history.scrollRestoration = originalScrollRestoration);
	});
};

export default useScrollToTop;
