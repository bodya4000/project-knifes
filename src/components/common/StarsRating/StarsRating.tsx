import { FC } from 'react';

import styles from './StarsRating.module.scss';

interface Props {
	rate: number;
}

const StarsRating: FC<Props> = ({ rate }) => {
	const percentage = (rate / 5) * 100;
	return (
		<div className={styles.starRating}>
			<div className={styles.starRatingOuter}>
				<div
					className={styles.starRatingInner}
					style={{ width: `${percentage}%` }}
				/>
			</div>
		</div>
	);
};

export default StarsRating;
