import { FC } from 'react';

import { Link } from 'react-router-dom';
import styles from './BrightYellowButton.module.scss';

interface Props {
	text: string;
	to?: string;
	onClick?: () => void;
	propsStyles?: string;
}

const BrightYellowButton: FC<Props> = ({ text, to, onClick, propsStyles }) => {
	return (
		<div
			onClick={onClick ? onClick : () => {}}
			className={`${propsStyles ? propsStyles : ''} ${styles.button}`}
		>
			{to ? (
				<Link className={styles.button} to={`project-knifes/${to}`}>
					{text}
				</Link>
			) : (
				<div className={styles.button}>{text}</div>
			)}
		</div>
	);
};

export default BrightYellowButton;
