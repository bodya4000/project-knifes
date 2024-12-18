import { FC, useEffect, useState } from 'react';
import styles from './CustomSlider.module.scss';

interface Props {
	min?: number;
	max?: number;
	defaultMinValue?: number;
	defaultMaxValue?: number;
	setMinFromParent: (value: number) => void;
	setMaxFromParent: (value: number) => void;
}

const CustomSlider: FC<Props> = ({
	min = 1,
	max = 100,
	defaultMinValue = min,
	defaultMaxValue = max,
	setMinFromParent,
	setMaxFromParent,
}) => {
	const [minValue, setMinValue] = useState(0);
	const [maxValue, setMaxValue] = useState(0);
	

	useEffect(() => {
		setMinValue(defaultMinValue);
		setMaxValue(defaultMaxValue);
	}, [defaultMinValue, defaultMaxValue]);

	const onChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);
		if (newValue <= maxValue - max*0.1) {
			setMinValue(newValue);
			setMinFromParent(newValue);
		}
	};

	const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);
		if (newValue >= minValue + max*0.1) {
			setMaxValue(newValue);
			setMaxFromParent(newValue);
		}
	};

	return (
		<div className={styles.slider}>
			<div className={styles.slider__track}></div>
			<div
				style={{
					left: `${((minValue - min) / (max - min)) * 100}%`,
					width: `${((maxValue - minValue) / (max - min)) * 100}%`,
				}}
				className={styles.slider__progres}
			></div>

			<input
				type='range'
				onChange={onChangeMin}
				min={min}
				max={max}
				value={minValue}
			/>
			<input
				type='range'
				onChange={onChangeMax}
				min={min}
				max={max}
				value={maxValue}
			/>
		</div>
	);
};

export default CustomSlider;
