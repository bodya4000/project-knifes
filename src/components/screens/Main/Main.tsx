import { FC } from 'react';

import Articles from '../../ui/Main/Articles/Articles';
import KnifeCategories from '../../ui/Main/KnifeCategories/KnifeCategories';
import Lanterns from '../../ui/Main/Lanterns/Lanterns';
// import ProductListView from '../../ui/Main/ProductListView/ProductListView';
import useScrollToTop from '../../../hooks/useScrollToTop';
import Welcome from '../../ui/Main/Welcome/Welcome';
import styles from './Main.module.scss';

const Main: FC = () => {
	useScrollToTop();
	return (
		<>
			<div className={styles.main}>
				<Welcome />
				<KnifeCategories />
				{/* <ProductListView /> */}
				<Articles />
				<Lanterns />
			</div>
		</>
	);
};

export default Main;
