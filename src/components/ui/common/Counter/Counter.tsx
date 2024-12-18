import { FC } from 'react';

import styles from './Counter.module.scss';

interface Props {
	value: number;
	onPlusClick: () => void;
	onMinusClick: () => void;

	propsStyles?: string;
}

const Counter: FC<Props> = ({
	value,
	onPlusClick,
	onMinusClick,
	propsStyles,
}) => {
	return (
		<div className={`${styles.container} ${propsStyles ? propsStyles : ''}`}>
			<div
				onClick={onMinusClick}
				className={`${styles.button} ${styles.base_button}`}
			>
				-
			</div>
			<div className={`${styles.view} ${styles.base_button}`}>{value}</div>
			<div
				onClick={onPlusClick}
				className={`${styles.button} ${styles.base_button}`}
			>
				+
			</div>
		</div>
	);
};

export default Counter;
