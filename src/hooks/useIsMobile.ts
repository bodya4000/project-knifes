import { useLayoutEffect, useState } from 'react';

const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useLayoutEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 767);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return isMobile;
};

export default useIsMobile;
