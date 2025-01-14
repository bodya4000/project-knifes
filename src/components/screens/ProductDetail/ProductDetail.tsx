import { FC } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useKnife from '../../../hooks/useKnife';

import useOptions from '../../../hooks/useOptions';
import useScrollToTop from '../../../hooks/useScrollToTop';
import ProductDetailView from '../../ui/ProductDetail/ProducDetailView/ProductDetailView';

const ProductDetail: FC = () => {
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');

	const { knifesData, isLoading, isError } = useKnife(Number(id));
	const { data: optionsData } = useOptions();
	const navigate = useNavigate();

	useScrollToTop();

	if (isError) {
		alert('failed to load product');
		navigate(-1);
		return;
	}

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return <>{knifesData && optionsData && <ProductDetailView optionsData={optionsData} productData={knifesData} />}</>;
};

export default ProductDetail;
