import { FC } from 'react';

import CustomImage from '../../common/CustomImage/CustomImage';
import TitleBlock from '../../common/TitleWithOrangeUnderlineBlock/TitleWithOrangeUnderlineBlock';
import styles from './KnifeCategoryItem.module.scss';

interface Props {
	title: string;
	items: string[];
	img: string;
}

const KnifeCategoryItem: FC<Props> = ({ title, items, img }) => {
	return (
		<div className={styles.knife_category}>
			<div className={styles.knife_category__container}>
				<div className={styles.knife_category__body}>
					<TitleBlock title={title} />
					<div className={styles.knife_category__info}>
						<ul className={styles.knife_category__items}>
							{items.map(item => {
								return <li key={item}>{item}</li>;
							})}
						</ul>
						<CustomImage
							propsStyles={styles.knife_category__img}
							alt=''
							src={img}
							// src='src\assets\images\knifes_categories\knife_1.png'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KnifeCategoryItem;
