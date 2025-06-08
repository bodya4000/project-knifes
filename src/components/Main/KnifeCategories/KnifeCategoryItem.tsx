import { FC } from 'react'

import { CustomImage, TitleWithOrangeUnderlineBlock } from '@/components'

import styles from './KnifeCategoryItem.module.scss'

interface Props {
	title: string
	items: string[]
	img: string
}

const KnifeCategoryItem: FC<Props> = ({ title, items, img }) => {
	return (
		<div className={styles.knife_category}>
			<div className={styles.knife_category__container}>
				<div className={styles.knife_category__body}>
					<TitleWithOrangeUnderlineBlock title={title} />
					<div className={styles.knife_category__info}>
						<ul className={styles.knife_category__items}>
							{items.map(item => {
								return <li key={item}>{item}</li>
							})}
						</ul>
						<CustomImage
							propsStyles={styles.knife_category__img}
							alt=""
							src={img}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default KnifeCategoryItem
