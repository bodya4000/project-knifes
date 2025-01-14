import { FC } from 'react';
import styles from './HiddenTitle.module.scss';

interface HiddenTitleProps {
	text: string;
}

const HiddenTitle: FC<HiddenTitleProps> = ({ text }) => {
	return <h2 className={styles.visually_hidden}>{text}</h2>;
};

export default HiddenTitle;
