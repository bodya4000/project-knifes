import { DebouncedFunc } from 'lodash';
import { FC, useEffect, useState } from 'react';
import { CatalogInterval } from '../../../../../../models/Catalog';
import CustomSlider from '../../../../common/CustomSlider/CustomSlider';
import styles from './SliderAndResultView.module.scss';

interface Props {
	data: CatalogInterval;
	onDataChange: DebouncedFunc<
		(_: number | undefined, __: number | undefined) => void
	>;
	propsStyles?: string;
}

const SliderAndResultView: FC<Props> = ({
	propsStyles,
	data,
	onDataChange,
}) => {
	const [min, setMin] = useState(data.currentMin);
	const [max, setMax] = useState(data.currentMax);

	useEffect(() => {
		if (data) {
			setMin(data.currentMin);
			setMax(data.currentMax);
		}
	}, [data]);

	const onChangeMax = (maxValue: number) => {
		onDataChange(min, maxValue);
		setMax(maxValue);
	};

	const onChangeMin = (minValue: number) => {
		onDataChange(minValue, max);
		setMin(minValue);
	};

	return (
		<div className={`${styles.container} ${propsStyles && propsStyles}`}>
			<div className={styles.result__body}>
				<div className={styles.result__view}>{min}</div>
				<div className={styles.result__view}>{max}</div>
			</div>

			<div className={styles.slider}>
				<CustomSlider
					defaultMaxValue={max}
					defaultMinValue={min}
					max={data.max}
					min={data.min}
					setMaxFromParent={onChangeMax}
					setMinFromParent={onChangeMin}
				/>
			</div>
		</div>
	);
};

export default SliderAndResultView;
