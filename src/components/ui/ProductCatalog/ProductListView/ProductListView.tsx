import { FC } from 'react';

import { Link } from 'react-router-dom';
import useCartSelector from '../../../../hooks/useCartSelector';
import useKnifes from '../../../../hooks/useKnifes';
import { IKnife } from '../../../../models/Knife';
import AI from '../../common/AI/AI';
import ProductView from '../../common/ProductView/ProductView';
import styles from './ProductListView.module.scss';

interface Props {
	propsStyles?: string;
}

const ProductListView: FC<Props> = ({ propsStyles }) => {
	// const [loadedProducts, setLoadedProducts] = useState<ProductViewData[]>([]);
	// const data = useCatalogOptionSelector();
	const { products } = useCartSelector();
	console.log(JSON.stringify(products));
	const { knifesData } = useKnifes();

	if (knifesData)
		return (
			<div className={`${styles.wrapper} ${propsStyles ? propsStyles : ''}`}>
				<ul className={styles.products}>
					{knifesData?.knives?.length > 0 &&
						knifesData?.knives?.map((product: IKnife) => (
							<Link to={'/product?id=' + product.id} key={product.id}>
								<ProductView product={product} />
							</Link>
						))}
				</ul>
			</div>
		);
	else {
		return <AI color='black' size={80} />;
	}
};

export default ProductListView;
