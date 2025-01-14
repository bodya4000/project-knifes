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
		<>
			{to ? (
				<Link onClick={onClick ? onClick : () => {}} className={`${propsStyles ? propsStyles : ''} ${styles.button}`} to={`project-knifes/${to}`}>
					{text}
				</Link>
			) : (
				<button onClick={onClick ? onClick : () => {}} className={`${propsStyles ? propsStyles : ''} ${styles.button}`}>
					{text}
				</button>
			)}
		</>
	);
};

export default BrightYellowButton;
