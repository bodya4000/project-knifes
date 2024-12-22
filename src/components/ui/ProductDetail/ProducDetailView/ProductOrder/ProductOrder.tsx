import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IOptions } from '../../../../../models/Catalog';
import { IKnifeDetail } from '../../../../../models/Knife';
import NotificationsService from '../../../../../services/NotificationsService';
import { addToCart } from '../../../../../store/cart';
import { parseDataInfoArrayWithKeysAndValue } from '../../../../../utils/ProductDetailUtills';
import BlackButton from '../../../common/BlackButton/BlackButton';
import BrightYellowButton from '../../../common/BrightYellowButton/BrightYellowButton';
import Counter from '../../../common/Counter/Counter';
import FavoritiesButton from '../../../common/FavoritesButton/FavoritiesButton';
import StarsRating from '../../../common/StarsRating/StarsRating';
import ProductInfo from './ProductInfo/ProductInfo';
import styles from './ProductOrder.module.scss';

interface Props {
	productData: IKnifeDetail;
	optionsData: IOptions;
}

const ProductOrder: FC<Props> = ({ productData }) => {
	const [count, setCount] = useState<number>(1);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onToCartClick = () => {
		dispatch(
			addToCart({
				id: productData.id,
				name: productData.name,
				imageUrl: productData.imageUrl,
				count: count,
				price: productData.price,
			})
		);
		navigate(-1);
		NotificationsService.success('Added to cart!');
	};

	const productInfo = parseDataInfoArrayWithKeysAndValue(productData);
	return (
		<div className={styles.order}>
			<div className={styles.order__header}>
				<div className={styles.order__top}>
					<h2 className={styles.order__name}>{productData.name}</h2>
					<div className={styles.order__iteractivity}>
						<StarsRating rate={productData.rating} />
						<FavoritiesButton propsStyles={styles.order__favorities} />
					</div>
				</div>
				<div className={styles.order__in_stock}>In stock</div>
			</div>

			<div className={`${styles.order__product_info} ${styles.product_info}`}>
				<ProductInfo data={productInfo} />
			</div>
			{/* 
			<div className={`${styles.order__options}`}>
					<SteelOptionSelector
						options={_.map(optionsData.steels, steel => _.pick(steel, 'name'))}
					/>

					<ManufacturerOptionSelector
						options={_.map(optionsData.manufactures, manufactures =>
							_.pick(manufactures, 'name')
						)}
					/>
			</div> */}

			<div className={styles.order__bottom}>
				<div className={styles.order__price}>$ {productData.price}</div>
				<div className={styles.order__cart}>
					<Counter
						onMinusClick={() => setCount(count - 1)}
						onPlusClick={() => setCount(count + 1)}
						value={count}
					/>
					<div className={styles.order__cart_btns}>
						<BrightYellowButton onClick={onToCartClick} text='To cart' />
						<BlackButton onClick={() => {}} text='Buy in 1 click' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductOrder;
