import { FC } from 'react';
import { IKnifeDetail } from '../../../../models/Knife';

import { IOptions } from '../../../../models/Catalog';
import common from '../../../../styles/common.module.scss';
import HiddenTitle from '../../common/HiddenTitle/HiddenTitle';
import styles from './ProductDetailView.module.scss';
import ProductImages from './ProductImages/ProductImages';
import ProductOrder from './ProductOrder/ProductOrder';

interface Props {
	productData: IKnifeDetail;
	optionsData: IOptions;
}

const ProductDetailView: FC<Props> = ({ productData, optionsData }) => {
	return (
		<section className={styles.product}>
			<HiddenTitle h1 text='Product detail view' />
			<div className={`	${common._container} `}>
				<div className={styles.product__details}>
					<ProductOrder productData={productData} optionsData={optionsData} />
					<ProductImages imageUrl={productData.imageUrl} />
				</div>
			</div>
		</section>
	);
};

export default ProductDetailView;
