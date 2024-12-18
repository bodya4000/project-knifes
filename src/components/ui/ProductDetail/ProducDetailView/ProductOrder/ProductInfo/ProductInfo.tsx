import { FC } from 'react';
import styles from './ProductInfo.module.scss';

interface Props {
	data: { keyValue: string; value: string }[];
}

const ProductInfo: FC<Props> = ({ data }) => {
	return (
		<div className={styles.item}>
			<div className={styles.item_keys}>
				{data.map(item => (
					<div key={item.keyValue} className={styles.item_key}>
						{item.keyValue}:
					</div>
				))}
			</div>

			<div className={styles.item_values}>
				{data.map(item => (
					<div key={item.keyValue} className={styles.item_value}>
						{item.value}
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductInfo;
