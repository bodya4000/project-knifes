import { FieldError } from 'react-hook-form';
import styles from './InputError.module.scss';

interface InputErrorProps {
	error?: FieldError;
}

const InputError = ({ error }: InputErrorProps) => {
	return error ? <span className={styles.error}>{error.message}</span> : null;
};

export default InputError;
