import { FC } from 'react';
import { useDispatch } from 'react-redux';
import useCatalogOptionSelector from '../../../../../../hooks/useCatalogOptionSelector';
import {
	clearManufacturer,
	setManufacturer,
} from '../../../../../../store/catalog';
import CheckBoxesView, {
	CheckBoxItem,
} from '../../views/CheckBoxesView/CheckBoxesView';
import OptionTable from '../OptionTable/OptionTable';

interface Props {
	manufacturers: CheckBoxItem[] | undefined;
}

const ManufactorerOption: FC<Props> = ({ manufacturers }) => {
	const { manufacturer } = useCatalogOptionSelector();

	const dispatch = useDispatch();

	const onChangeManufactorer = (newManufacturer: string) => {
		if (newManufacturer === manufacturer) {
			dispatch(clearManufacturer());
		} else {
			dispatch(setManufacturer(newManufacturer));
		}
	};

	return (
		<OptionTable title='Manufacturers'>
			<CheckBoxesView
				onChangeData={onChangeManufactorer}
				selectedCheckbox={manufacturer}
				data={manufacturers}
			/>
		</OptionTable>
	);
};

export default ManufactorerOption;
