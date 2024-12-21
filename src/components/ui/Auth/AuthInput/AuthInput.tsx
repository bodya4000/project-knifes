import { ChangeEvent, forwardRef } from 'react';
import CustomInput from '../../common/CustomInput/CustomInput';
import styles from './AuthInput.module.scss';

interface AuthInputProps {
	type?: React.HTMLInputTypeAttribute;
	placeholder: string;
	value: string;
	onChange: (text: ChangeEvent<HTMLInputElement>) => void;
	name?: string;
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
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


export default AuthInput;
