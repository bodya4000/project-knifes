import { FC } from 'react';

// import BrightYellowButton from '../BrightYellowButton/BrightYellowButton';
import { IKnife } from '../../../../models/Knife';
import StarsRating from '../StarsRating/StarsRating';
import styles from './ProductView.module.scss';

interface Props {
	product: IKnife;
}

const ProductView: FC<Props> = ({ product }) => {
	return (
		<li className={styles.product}>
			<div className={styles.product__body}>
				<div className={styles.product__img}>
					<img alt='product' src={product.imageUrl} />
				</div>

				<div className={styles.product__details}>
					<h3 className={styles.product__name}>{product.name}</h3>

					<div className={styles.product__info}>
						<div className={styles.product__params}>
							<div className={styles.product__size}>{product.size}</div>
							<div className={styles.product__material}>{product.material}</div>
						</div>

						<div className={styles.product__feedback}>
							<StarsRating rate={product.rating} />
							<div className={styles.product__feedback_amount}>
								{product.questioners} feedbacks
							</div>
						</div>
					</div>

					<div className={styles.product__bottom}>
						<div className={styles.product__price}>{product.price} $</div>
						<div className={styles.product__add_to_favorites}>&#9825;</div>
					</div>

					{/* <BrightYellowButton
						propsStyles={styles.product__button}
						text='Add to cart'
					/> */}
				</div>
			</div>
		</li>
	);
};

export default ProductView;
