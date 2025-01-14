import { FC } from 'react';

import CustomImage from '../../../common/CustomImage/CustomImage';
import styles from './ProductImages.module.scss';

interface Props {
	imageUrl: string;
}

const ProductImages: FC<Props> = ({ imageUrl }) => {
	return (
		<section className={styles.product__images} key={imageUrl}>
			<div className={styles.product__images_main}>
				<CustomImage alt='Product Image' src={imageUrl} />
			</div>
			<div className={styles.product__images_bottom}>
				<div className={styles.product__images_default}>
					<CustomImage alt='Product Image' src={imageUrl} />{' '}
				</div>{' '}
				<div className={styles.product__images_default}>
					<CustomImage alt='Product Image' src={imageUrl} />{' '}
				</div>{' '}
				<div className={styles.product__images_default}>
					<CustomImage alt='Product Image' src={imageUrl} />{' '}
				</div>{' '}
				<div className={styles.product__images_default}>
					<CustomImage alt='Product Image' src={imageUrl} />{' '}
				</div>
			</div>
		</section>
	);
};

export default ProductImages;
