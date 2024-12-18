import { FC } from 'react';
import CatalogCheckBox from '../../../../common/CatalogCheckBox/CatalogCheckBox';

import styles from './CheckBoxesView.module.scss';
import { CheckBoxItem } from '../../../../../../models/Catalog'



interface Props {
	data: CheckBoxItem[] | undefined;
	onChangeData: (checkbox: string) => void;
	selectedCheckbox: string | undefined;
}

const CheckBoxesView: FC<Props> = ({
	data,
	onChangeData,
	selectedCheckbox,
}) => {
	if (data) {
		return (
			<div className={styles.checkbox__list}>
				{data.map(item => (
					<CatalogCheckBox
						key={item.name}
						id={item.name}
						label1={item.name}
						label2={item?.count}
						value={item.name === selectedCheckbox}
						callback={() => onChangeData(item.name)}
					/>
				))}
			</div>
		);
	}
};

export default CheckBoxesView;
