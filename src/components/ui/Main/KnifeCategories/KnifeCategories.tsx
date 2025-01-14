import { FC } from 'react';

import common from '../../../../styles/common.module.scss';
import styles from './KnifeCategories.module.scss';
import KnifeCategoryItem from './KnifeCategoryItem';
import HiddenTitle from '../../common/HiddenTitle/HiddenTitle'


const KnifeCategories: FC = () => {
	const data = [
		{
			title: 'Knifes Catalog',
			items: ['Cutting', 'Tourist', 'Hunt'],
			img: 'knife_1.webp',
		},
		{
			title: 'Camping Gear',
			items: ['Tents', 'Sleeping Bags', 'Camping Stoves'],
			img: 'knife_2.webp',
		},
		{
			title: 'Fishing Equipment',
			items: ['Fishing Rods', 'Lures', 'Nets'],
			img: 'knife_3.webp',
		},
		{
			title: 'Hiking Boots',
			items: ['Waterproof', 'Lightweight', 'Ankle Support'],
			img: 'knife_4.svg',
		},
		{
			title: 'Survival Tools',
			items: ['Fire Starters', 'Multi-tools', 'Water Filters'],
			img: 'knife_5.webp',
		},
		{
			title: 'Backpacks',
			items: ['Daypacks', 'Hiking Backpacks', 'Travel Backpacks'],
			img: 'knife_6.webp',
		},
	];

	return (
		<section className={styles.knife_categories}>
			<HiddenTitle text='Knife Categories' />
			<div
				className={`${common._container} ${styles.knife_categories__container}`}
			>
				{data.map(categoryItem => {
					return (
						<KnifeCategoryItem
							key={categoryItem.title}
							title={categoryItem.title}
							items={categoryItem.items}
							img={`assets/images/knifes_categories/${categoryItem.img}`}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default KnifeCategories;
