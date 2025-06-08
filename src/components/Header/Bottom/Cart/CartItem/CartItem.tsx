import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { Counter, CustomImage } from '@/components'
import NotificationsService from '@/services/NotificationsService'
import { addItemById, removeItemById } from '@/store/cart'

import styles from './CartItem.module.scss'

interface Props {
	id: number
	name: string
	imageUrl: string
	totalPrice: number
	count: number
}

const CartItem: FC<Props> = ({ id, name, imageUrl, totalPrice, count }) => {
	const dispatch = useDispatch()
	const onPlusClick = () => {
		dispatch(addItemById(id))
		NotificationsService.success('Added one more')
	}
	const onMinusClick = () => {
		dispatch(removeItemById(id))
		NotificationsService.success('Removed from cart')
	}
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
	)
}

export default CartItem
