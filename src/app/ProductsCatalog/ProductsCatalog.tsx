import { FC } from 'react'

import CatalogHeader from '../../components/ProductCatalog/CatalogHeader/CatalogHeader'
import CatalogOptions from '../../components/ProductCatalog/CatalogOptions/CatalogOptions'
import CatalogProductListView from '../../components/ProductCatalog/ProductListView/ProductListView'
import styles from './ProductsCatalog.module.scss'

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
	)
}

export default ProductsCatalog
