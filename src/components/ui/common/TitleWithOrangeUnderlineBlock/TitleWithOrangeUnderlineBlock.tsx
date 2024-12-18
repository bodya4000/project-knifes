import { FC } from 'react';

import styles from './TitleWithOrangeUnderlineBlock.module.scss';

interface Props {
	title: string;
	propsStyles?: string;
}

const TitleWithOrangeUnderlineBlock: FC<Props> = ({ title, propsStyles }) => {
	return (
		<div className={`${propsStyles && propsStyles} ${styles.title}`}>
			<h3>{title}</h3>
			<div className={styles.title_underline}></div>
		</div>
	);
};

export default TitleWithOrangeUnderlineBlock;
