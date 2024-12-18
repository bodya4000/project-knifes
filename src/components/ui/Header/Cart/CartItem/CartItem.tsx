import { FC } from 'react';

import { useDispatch } from 'react-redux';
import { addItemById, removeItemById } from '../../../../../store/cart';
import Counter from '../../../common/Counter/Counter';
import CustomImage from '../../../common/CustomImage/CustomImage';
import styles from './CartItem.module.scss';

interface Props {
	id: number;
	name: string;
	imageUrl: string;
	totalPrice: number;
	count: number;
}

const CartItem: FC<Props> = ({ id, name, imageUrl, totalPrice, count }) => {
	const dispatch = useDispatch();
	const onPlusClick = () => {
		dispatch(addItemById(id));
	};
	const onMinusClick = () => {
		dispatch(removeItemById(id));
	};
	return (
		<div className={styles.item}>
			<CustomImage
				propsStyles={styles.item__img}
				src={imageUrl}
				alt={`${name} image`}
			/>
			<div className={styles.item__details}>
				<div className={styles.item__name}>{name}</div>
				<Counter
					propsStyles={styles.item__count}
					onMinusClick={onMinusClick}
					onPlusClick={onPlusClick}
					value={count}
				/>{' '}
				<div className={styles.item__price}>
					<span>Price:</span> <span>{totalPrice}</span>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
