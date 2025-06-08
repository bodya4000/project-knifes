import { FC } from 'react';
import { Link } from 'react-router-dom';
import AI from '../AI/AI';
import styles from './BlackButton.module.scss';

interface Props {
	submit?: boolean;
	text?: string;
	to?: string;
	onClick?: () => void;
	propsStyles?: string;
	disabled?: boolean;
	loading?: boolean;
}

const BlackButton: FC<Props> = ({
	text,
	to,
	onClick,
	propsStyles,
	submit,
	disabled,
	loading,
}) => {
	const buttonClassName = `${styles.button} ${propsStyles || ''}`;

	if (to) {
		return (
			<Link
				className={`${buttonClassName} ${
					disabled || loading ? styles.disabled : ''
				}`}
				to={`project-knifes/${to}`}
			>
				{loading ? <AI color='white' /> : text}
			</Link>
		);
	}

	return (
		<button
			disabled={disabled || loading ? true : false}
			type={submit ? 'submit' : 'button'}
			onClick={onClick}
			className={`${buttonClassName} ${disabled ? styles.disabled : ''}`}
		>
			{loading ? <AI color='white' /> : text}
		</button>
	);
};

export default BlackButton;
