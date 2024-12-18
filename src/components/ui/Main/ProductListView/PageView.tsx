import { FC } from 'react';

import styles from './PageView.module.scss';

interface Props {
	active?: boolean;
}

const PageView: FC<Props> = ({ active }) => {
	return (
		<div
			className={`
				${styles.line}  
				${active ? styles.active : styles.default}`}
		></div>
	);
};

export default PageView;
