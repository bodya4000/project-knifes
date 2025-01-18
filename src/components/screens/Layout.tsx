import { FC, lazy, Suspense, useLayoutEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useCheckAuth from '../../hooks/useCheckAuth';
import common from '../../styles/common.module.scss';
import { debounceFunction } from '../../utils/CatalogUtills';
import AI from '../ui/common/AI/AI';
import HiddenTitle from '../ui/common/HiddenTitle/HiddenTitle';
import Footer from '../ui/Footer/Footer';
import Header from '../ui/Header/Header';

const Auth = lazy(() => import('./Auth/Auth'));
const Layout: FC = () => {
	const { isAuthenticated } = useCheckAuth();

	const [showFooter, setShowFooter] = useState(false);

	useLayoutEffect(() => {
		const handleScroll = debounceFunction(() => {
			if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight * 0.8) {
				setShowFooter(true);
			}
		});
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	if (!isAuthenticated) {
		return (
			<Suspense fallback={<AI />}>
				<Auth />
			</Suspense>
		);
	}

	return (
		<div className={common._wrapper}>
			<Header />
			<main id='detail'>
				<Suspense fallback={<AI />}>
					<Outlet />
				</Suspense>
			</main>

			<footer>{showFooter ? <Footer /> : <HiddenTitle text='Zlatoust Knives www.zlatmax.ua ©' />}</footer>
		</div>
	);
};

export default Layout;
