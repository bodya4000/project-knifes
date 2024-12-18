import { FC } from 'react';

import CustomImage from '../../common/CustomImage/CustomImage';
import CustomLink from '../../common/CustomLink/CustomLink';
import styles from './ArticleItem.module.scss';

interface Props {
	src: string;
	alt: string;
}

const ArticleItem: FC<Props> = ({ src, alt }) => {
	return (
		<div className={styles.article}>
			<div className={styles.article_ibg}>
				<CustomImage src={src} alt={alt} />
			</div>

			<CustomLink link='/' propsStyles={styles.article__body}>
				<h3 className={styles.article__title}>
					All about knives: how to choose the right one{' '}
				</h3>
				<div className={styles.article__date}>24.07.2019</div>
			</CustomLink>
		</div>
	);
};

export default ArticleItem;
