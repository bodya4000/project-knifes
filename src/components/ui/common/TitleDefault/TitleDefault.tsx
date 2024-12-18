import { FC } from 'react';

import styles from './TitleDefault.module.scss';

interface Props {
	title: string;
}

const TitleDefault: FC<Props> = ({ title }) => {
	return <h2 className={styles.title}>{title}</h2>;
};

export default TitleDefault;
