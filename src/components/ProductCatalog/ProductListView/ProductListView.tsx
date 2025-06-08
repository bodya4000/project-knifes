import { FC } from 'react'
import { Link } from 'react-router-dom'

import useKnifes from '../../../hooks/useKnifes'
import { IKnife } from '../../../models/Knife'
import { BlackButton } from '../../common'
import AI from '../../common/AI/AI'
import ProductView from '../../common/ProductView/ProductView'
import styles from './ProductListView.module.scss'

interface Props {
	propsStyles?: string
}

const ProductListView: FC<Props> = ({ propsStyles }) => {
	const { knivesData, fetchNextPage, hasNextPage } = useKnifes()
	console.log(knivesData)

	if (!knivesData || knivesData.knives.length == 0)
		return (
			<div style={{ minHeight: 1000 }}>
				<AI color="black" />
			</div>
		)
	return (
		<div className={`${styles.wrapper} ${propsStyles ? propsStyles : ''}`}>
			<ul className={styles.products}>
				{knivesData.knives.map((product: IKnife) => (
					<Link
						to={'/product?id=' + product.id}
						key={product.id}
					>
						<ProductView product={product} />
					</Link>
				))}
			</ul>
			{hasNextPage && (
				<BlackButton
					onClick={fetchNextPage}
					propsStyles={styles.btn}
					text="Load more knives!"
				/>
			)}
		</div>
	)
}

export default ProductListView
