import { FC } from 'react';

import CustomImage from '../../../common/CustomImage/CustomImage';
import styles from './ProductImages.module.scss';

interface Props {
	imageUrl: string;
}

const ProductImages: FC<Props> = ({ imageUrl }) => {
	return (
		<div className={styles.product__images}>
			<CustomImage
				alt='Product Image'
				src={imageUrl}
				propsStyles={styles.product__images_main}
			/>
			<div className={styles.product__images_bottom}>
				<CustomImage
					alt='Product Image'
					src={imageUrl}
					propsStyles={styles.product__images_default}
				/>{' '}
				<CustomImage
					alt='Product Image'
					src={imageUrl}
					propsStyles={styles.product__images_default}
				/>{' '}
				<CustomImage
					alt='Product Image'
					src={imageUrl}
					propsStyles={styles.product__images_default}
				/>{' '}
				<CustomImage
					alt='Product Image'
					src={imageUrl}
					propsStyles={styles.product__images_default}
				/>
			</div>
		</div>
	);
};

export default ProductImages;
