import { CSSProperties, FC, useState } from 'react';

interface CustomCheckboxProps {
	checked?: boolean;
	label: string;
	onChange: (checked: boolean) => void;
	propsStyles?: string;
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({
	checked = false,
	label,
	onChange,
	propsStyles,
}) => {
	const [isChecked, setIsChecked] = useState(checked);

	const handleCheckboxChange = () => {
		const newCheckedState = !isChecked;
		setIsChecked(newCheckedState);
		onChange(newCheckedState);
	};

	return (
		<label className={propsStyles && propsStyles} style={styles.checkboxLabel}>
			<input
				type='checkbox'
				checked={isChecked}
				onChange={handleCheckboxChange}
				style={styles.checkboxInput as CSSProperties}
			/>
			<span style={styles.customCheckbox as CSSProperties}>
				{isChecked && '✓'}
			</span>
			<div>{label}</div>
		</label>
	);
};

const styles = {
	checkboxLabel: {
		display: 'flex',
		cursor: 'pointer',
	},
	checkboxInput: {
		display: 'none',
	},
	customCheckbox: {
		display: 'inline-block',
		width: '16px',
		height: '16px',
		border: '1px solid #ccc',
		marginRight: '8px',
		textAlign: 'center',
		lineHeight: '16px',
		fontSize: '12px',
		color: '#fff',
		backgroundColor: 'black',

		position: 'relative',
		top: '5px',
	},
};

export default CustomCheckbox;
