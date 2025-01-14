import { FC } from 'react';
import styles from './HiddenTitle.module.scss';

interface HiddenTitleProps {
	text: string;
	h1?: boolean;
}

const HiddenTitle: FC<HiddenTitleProps> = ({ text, h1 }) => {
	if (h1) return <h1 className={styles.visually_hidden}>{text}</h1>;
	return <h2 className={styles.visually_hidden}>{text}</h2>;
};

export default HiddenTitle;
