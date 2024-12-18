import { FC } from 'react';

import styles from './CustomInput.module.scss';

interface Props {
	placeholder?: string;
	value?: string;
	onChange?: () => void;
	styles?: string;
}

const CustomInput: FC<Props> = props => {
	return (
		<div>
			<input
				className={`${styles.input} ${props.styles && props.styles}`}
				value={props.value}
				onChange={props.onChange}
				placeholder={props.placeholder}
				type={'text'}
			/>
		</div>
	);
};

export default CustomInput;
