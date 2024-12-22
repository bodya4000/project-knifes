import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './BlackButton.module.scss';

interface Props {
	submit?: boolean;
	text: string;
	to?: string;
	onClick?: () => void;
	propsStyles?: string;
	disabled?: boolean;
}

const BlackButton: FC<Props> = ({
	text,
	to,
	onClick,
	propsStyles,
	submit,
	disabled,
}) => {
	const buttonClassName = `${styles.button} ${propsStyles || ''}`;

	if (to) {
		return (
			<Link
				className={`${buttonClassName} ${disabled ? styles.disabled : ''}`}
				to={`project-knifes/${to}`}
			>
				{text}
			</Link>
		);
	}

	return (
		<button
			disabled={disabled ? true : false}
			type={submit ? 'submit' : 'button'}
			onClick={onClick}
			className={`${buttonClassName} ${disabled ? styles.disabled : ''}`}
		>
			{text}
		</button>
	);
};

export default BlackButton;
