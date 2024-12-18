import { FC } from 'react';

import { Link } from 'react-router-dom';
import styles from './BlackButton.module.scss';

interface Props {
	text: string;
	to?: string;

	onClick: () => void;
	propsStyles?: string;
}

const BlackButton: FC<Props> = ({ text, to, onClick, propsStyles }) => {
	return (
		<div
			onClick={onClick}
			className={`${styles.button} ${propsStyles ? propsStyles : ''}`}
		>
			{to ? (
				<Link
					className={`${styles.button} ${propsStyles ? propsStyles : ''}`}
					to={to}
				>
					{text}
				</Link>
			) : (
				<div className={`${styles.button} ${propsStyles ? propsStyles : ''}`}>
					{text}
				</div>
			)}
		</div>
	);
};

export default BlackButton;
