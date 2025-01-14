import { FC } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useKnife from '../../../hooks/useKnife';

import useOptions from '../../../hooks/useOptions';
import useScrollToTop from '../../../hooks/useScrollToTop';
import NotificationsService from '../../../services/NotificationsService';
import ProductDetailView from '../../ui/ProductDetail/ProducDetailView/ProductDetailView';
import AI from '../../ui/common/AI/AI';
import styles from './ProductDetail.module.scss';

const ProductDetail: FC = () => {
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');

	const { knifesData, isLoading, isError } = useKnife(Number(id));
	const { data: optionsData } = useOptions();
	const navigate = useNavigate();
	useScrollToTop();

	console.log(isLoading);
	
	if (isError) {
		NotificationsService.error('failed to load product');
		navigate(-1);
		return;
	}

	return (
		<div style={{ minHeight: '700px' }} key={id}>
			{isLoading ? (
				<div className={styles.ai}>
					<AI color='#e8aa31' size={100} />
				</div>
			) : (
				knifesData && optionsData && <ProductDetailView key={id} optionsData={optionsData} productData={knifesData} />
			)}
		</div>
	);
};

export default ProductDetail;
