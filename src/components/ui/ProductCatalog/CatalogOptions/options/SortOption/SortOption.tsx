import { FC } from 'react';
import { useDispatch } from 'react-redux';
import {
	SORT_OPTION_DETAILS,
	SORT_OPTIONS,
} from '../../../../../../enums/SORT_OPTIONS';
import useCatalogOptionSelector from '../../../../../../hooks/useCatalogOptionSelector';
import { setSort } from '../../../../../../store/catalog';
import CustomSelector from '../../../../common/CustomSelector/CustomSelector';

import styles from './SortOption.module.scss';

interface Props {}

const SortOption: FC<Props> = () => {
	const { sort } = useCatalogOptionSelector();
	const { backValue, frontValue } = sort;
	const dispatch = useDispatch();

	const onOptionClick = (back: string, front: string) => {
		if (back !== backValue) {
			dispatch(setSort({ backValue: back, frontValue: front }));
		}
	};

	// Опції у форматі, який підходить для CustomSelector
	const options = Object.values(SORT_OPTIONS).map(option => ({
		name: SORT_OPTION_DETAILS[option].frontValue,
		backValue: SORT_OPTION_DETAILS[option].backValue,
	}));

	return (
		<div className={styles.sort}>
			<CustomSelector
				onOptionClick={selectedOption => {
					const selected = options.find(
						option => option.name === selectedOption
					);
					if (selected) {
						onOptionClick(selected.backValue, selected.name);
					}
				}}
				currentOption={frontValue}
				options={options.map(option => ({ name: option.name }))}
				propsStyles={styles.sort_selector}
			/>
		</div>
	);
};

export default SortOption;
