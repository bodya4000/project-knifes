import { FC } from 'react';
import { IKnifeDetail } from '../../../../models/Knife';

import { IOptions } from '../../../../models/Catalog';
import common from '../../../../styles/common.module.scss';
import styles from './ProductDetailView.module.scss';
import ProductImages from './ProductImages/ProductImages';
import ProductOrder from './ProductOrder/ProductOrder';

interface Props {
	productData: IKnifeDetail;
	optionsData: IOptions;
}

const ProductDetailView: FC<Props> = ({ productData, optionsData }) => {
	return (
		<div className={styles.product}>
			<div
				className={`
					${common._container} 
					${styles.product__container}
					`}
			>
				<div className={styles.product__details}>
					<ProductOrder productData={productData} optionsData={optionsData} />
					<ProductImages imageUrl={productData.imageUrl} />
				</div>
			</div>
		</div>
	);
};

export default ProductDetailView;
