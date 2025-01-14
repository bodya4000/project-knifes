import { ChangeEvent, forwardRef } from 'react';

import styles from './CustomInput.module.scss';

interface Props {
	placeholder?: string;
	value?: string;
	onChange?: (text: ChangeEvent<HTMLInputElement>) => void;
	styles?: string;
	type?: React.HTMLInputTypeAttribute;
	name?: string;
}

const CustomInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
	return <input className={`${styles.input} ${props.styles && props.styles}`} value={props.value} onChange={props.onChange} placeholder={props.placeholder} type={props.type ? props.type : 'text'} name={props.name} ref={ref} />;
});

export default CustomInput;
