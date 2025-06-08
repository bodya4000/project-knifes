import { FC } from 'react';

import common from '../../../../styles/common.module.scss';
import LanternInfo from './LanternInfo';
import styles from './Lanterns.module.scss';

const Lanterns: FC = () => {
	return (
		<section className={styles.lanterns}>
			<div
				className={`
				${common._container} 
				${styles.lanterns__container}`}
			>
				<LanternInfo src='assets\images\lanterns\1.svg' />
				<LanternInfo src='assets\images\lanterns\2.svg' />
			</div>
		</section>
	);
};

export default Lanterns;
