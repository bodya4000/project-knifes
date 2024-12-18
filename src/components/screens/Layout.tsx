import { FC } from 'react';
import Header from '../ui/Header/Header';

import { Outlet } from 'react-router-dom';
import common from '../../styles/common.module.scss';
import Footer from '../ui/Footer/Footer';


const Layout: FC = () => {
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
