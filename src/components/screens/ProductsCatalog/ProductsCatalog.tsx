import { FC } from 'react';

import CatalogHeader from '../../ui/ProductCatalog/CatalogHeader/CatalogHeader';
import CatalogOptions from '../../ui/ProductCatalog/CatalogOptions/CatalogOptions';
import CatalogProductListView from '../../ui/ProductCatalog/ProductListView/ProductListView';
import styles from './ProductsCatalog.module.scss';

const ProductsCatalog: FC = () => {
	return (
		<div className={styles.catalog}>
			<div className={` ${styles.catalog__container}`}>
				<CatalogHeader propsStyles={styles.catalog__header} />
				<div className={styles.catalog__body}>
					<CatalogOptions propsStyles={styles.catalog__options} />
					<CatalogProductListView propsStyles={styles.catalog__list} />
				</div>
			</div>
		</div>
	);
};

export default ProductsCatalog;
