import { FC, ReactNode, useState } from 'react';
import CustomImage from '../../../../common/CustomImage/CustomImage';
import styles from './OptionTable.module.scss';

interface Props {
	title: string;
	children: ReactNode;
}

const OptionTable: FC<Props> = ({ title, children }) => {
	const [showTable, setShowTable] = useState<boolean>(true);
	return (
		<div className={styles.option}>
			<div className={styles.option__black}>
				<h4 className={styles.option__title}>{title}</h4>
				<div
					className={styles.option__collapse}
					onClick={() => setShowTable(!showTable)}
				>
					<CustomImage
						propsStyles={
							!showTable
								? styles.option__collapse_close
								: styles.option__collapse_open
						}
						src='assets\images\collapse_yellow.svg'
						alt='collapse'
					/>
				</div>
			</div>
			<div
				className={`${styles.option__body} ${
					!showTable && styles.option__body_closed
				}`}
			>
				{children}
			</div>
		</div>
	);
};

export default OptionTable;
