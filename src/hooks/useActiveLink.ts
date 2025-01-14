import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { normalizeLink } from '../utils/LinkUtills';

const useActiveLink = (links: string[]) => {
	const location = useLocation();
	const [active, setActive] = useState<string>('About');

	const setActiveLinkFromPath = (path: string) => {
		const foundLink = links.find(link => path.includes(normalizeLink(link)));
		if (foundLink) {
			setActive(foundLink);
		} else {
			setActive('/');
		}
	};

	useEffect(() => {
		console.log('Current path:', location.pathname);
		window.scrollTo(0, 0);
		setActiveLinkFromPath(location.pathname.substring(1));
	}, [location]);

	return { active, setActive };
};

export default useActiveLink;
