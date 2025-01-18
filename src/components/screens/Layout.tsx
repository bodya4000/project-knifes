import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import useCheckAuth from '../../hooks/useCheckAuth';
import common from '../../styles/common.module.scss';
import Header from '../ui/Header/Header';
import { Auth } from './Auth/Auth';

const HeavyComponent = React.lazy(() => import('../ui/Footer/Footer'));
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

			<Suspense fallback={<div>Loading...</div>}>
				<HeavyComponent />
			</Suspense>
		</div>
	);
};

export default Layout;
