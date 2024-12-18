import { FC } from 'react';
import { CheckBoxItem } from '../../../../../models/Catalog';
import CustomSelector from '../../../common/CustomSelector/CustomSelector';

import styles from './OptionSelector.module.scss';

interface Props {
	options: Pick<CheckBoxItem, 'name'>[] | undefined;
}

const ManufacturerOptionSelector: FC<Props> = ({ options }) => {
	const onOptionClick = (option: string) => {};
	console.log(options);
	return (
		<div className={styles.option}>
			<div className={styles.option_name}>Manufacturer</div>
			<CustomSelector
				onOptionClick={onOptionClick}
				currentOption='BladeCraft'
				options={options}
				propsStyles={styles.option_selector}
			/>
		</div>
	);
};

export default ManufacturerOptionSelector;
