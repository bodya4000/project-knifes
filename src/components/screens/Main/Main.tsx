import { FC } from 'react';

import Articles from '../../ui/Main/Articles/Articles';
import KnifeCategories from '../../ui/Main/KnifeCategories/KnifeCategories';
import Lanterns from '../../ui/Main/Lanterns/Lanterns';
import ProductListView from '../../ui/Main/ProductListView/ProductListView';
import Welcome from '../../ui/Main/Welcome/Welcome';
import styles from './Main.module.scss';

interface Props {}

const Main: FC<Props> = ({}) => {
	return (
		<>
			<div className={styles.main}>
				<Welcome />
				<KnifeCategories />
				<ProductListView />
				<Articles />
				<Lanterns />
			</div>
		</>
	);
};

export default Main;
