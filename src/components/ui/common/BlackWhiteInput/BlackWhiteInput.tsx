import { ChangeEvent, forwardRef } from 'react';
import CustomInput from '../CustomInput/CustomInput';
import styles from './BlackWhiteInput.module.scss';

interface BlackWhiteInputProps {
	type?: React.HTMLInputTypeAttribute;
	placeholder: string;
	value: string;
	onChange: (text: ChangeEvent<HTMLInputElement>) => void;
	name?: string;
}

const BlackWhiteInput = forwardRef<HTMLInputElement, BlackWhiteInputProps>(
	({ placeholder, value, onChange, type, name }, ref) => {
		return (
	
			<CustomInput
				type={type}
				styles={styles.input}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				name={name}
				ref={ref}
			/>
		);
	}
);

export default BlackWhiteInput;
