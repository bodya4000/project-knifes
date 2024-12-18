import { FC } from 'react';

import { Link } from 'react-router-dom';
import useKnifes from '../../../../hooks/useKnifes';
import useCartSelector from '../../../../hooks/useSelectors/useCartSelector';
import { IKnife } from '../../../../models/Knife';
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
					{knifesData?.knives?.length > 0 ? (
						knifesData?.knives?.map((product: IKnife) => (
							<Link to={'/product?id=' + product.id} key={product.id}>
								<ProductView product={product} />
							</Link>
						))
					) : (
						<p>Loading products...</p>
					)}
				</ul>
			</div>
		);
};

export default ProductListView;
