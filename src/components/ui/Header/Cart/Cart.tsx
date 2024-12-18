import { FC } from 'react';
import useCartSelector from '../../../../hooks/useSelectors/useCartSelector';

import BlackButton from '../../common/BlackButton/BlackButton';
import styles from './Cart.module.scss';
import CartItem from './CartItem/CartItem';

interface Props {}

const Cart: FC<Props> = ({}) => {
	const { products, totalPrice } = useCartSelector();
	return (
		<div className={styles.cart}>
			<div className={styles.cart__items}>
				{Object.entries(products).length > 0 ? (
					Object.entries(products).map(([id, product]) => {
						return (
							<CartItem
								key={id}
								id={+id}
								name={product.name}
								imageUrl={product.imageUrl}
								totalPrice={product.totalPrice}
								count={product.count}
							/>
						);
					})
				) : (
					<div className={styles.cart__empty}>No products in cart yet :(</div>
				)}
			</div>

			{Object.entries(products).length > 0 && (
				<div className={styles.cart__total}>
					<div className={styles.cart__total_price}>Total: {totalPrice}</div>
					<BlackButton
						propsStyles={styles.cart__total_btn}
						onClick={() => {}}
						text='Complete order'
					/>
				</div>
			)}
		</div>
	);
};

export default Cart;
