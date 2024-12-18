import { FC } from 'react';
import { CheckBoxItem } from '../../../../../models/Catalog';
import CustomSelector from '../../../common/CustomSelector/CustomSelector';

import styles from './OptionSelector.module.scss';

interface Props {
	options: Pick<CheckBoxItem, 'name'>[] | undefined;
}

const SteelOptionSelector: FC<Props> = ({ options }) => {
	const onOptionClick = (option: string) => {};
	console.log(options);

	return (
		<div
			className={styles.option}
			style={{ position: 'relative', zIndex: 1001 }}
		>
			<div className={styles.option_name}>Steel</div>
			<CustomSelector
				onOptionClick={onOptionClick}
				currentOption='100x13'
				options={options}
				propsStyles={styles.option_selector}
			/>
		</div>
	);
};

export default SteelOptionSelector;
