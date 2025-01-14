import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import useCheckAuth from '../../hooks/useCheckAuth';
import common from '../../styles/common.module.scss';
import Footer from '../ui/Footer/Footer';
import Header from '../ui/Header/Header';
import { Auth } from './Auth/Auth';

const Layout: FC = () => {
	const { isAuthenticated } = useCheckAuth();
	if (!isAuthenticated) {
		return <Auth />;
	}

	return (
		<div className={common._wrapper}>
			<Header />
			<main id='detail'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
