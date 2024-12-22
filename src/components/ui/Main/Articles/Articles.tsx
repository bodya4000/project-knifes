import { FC } from 'react';
import TitleDefault from '../../common/TitleDefault/TitleDefault';

import common from '../../../../styles/common.module.scss';
import ArticleItem from './ArticleItem';
import styles from './Articles.module.scss';


const Articles: FC = () => {
	return (
		<section className={styles.articles}>
			<div className={`${common._container} ${styles.articles__container}`}>
				<TitleDefault title='Our Articles' />

				<div className={styles.articles__body}>
					<ArticleItem
						src='assets\images\articles\article_1.svg'
						alt='article 1'
					/>
					<ArticleItem
						src='assets\images\articles\article_2.svg'
						alt='article 2'
					/>
					<ArticleItem
						src='assets\images\articles\article_3.svg'
						alt='article 3'
					/>
				</div>
			</div>
		</section>
	);
};

export default Articles;
