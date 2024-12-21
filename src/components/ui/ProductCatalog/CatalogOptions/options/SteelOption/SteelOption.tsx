import { FC } from 'react';
import { useDispatch } from 'react-redux';
import useCatalogOptionSelector from '../../../../../../hooks/useCatalogOptionSelector';
import { clearSteel, setSteel } from '../../../../../../store/catalog';
import CheckBoxesView, {
	CheckBoxItem,
} from '../../views/CheckBoxesView/CheckBoxesView';
import OptionTable from '../OptionTable/OptionTable';

interface Props {
	steels: CheckBoxItem[] | undefined;
}

const SteelOption: FC<Props> = ({ steels }) => {
	const { steel } = useCatalogOptionSelector();

	const dispatch = useDispatch();

	const onChangeSteel = (newSteel: string) => {
		if (newSteel === steel) {
			dispatch(clearSteel());
		} else {
			dispatch(setSteel(newSteel));
		}
	};

	return (
		<OptionTable title='Steels'>
			<CheckBoxesView
				onChangeData={onChangeSteel}
				selectedCheckbox={steel}
				data={steels}
			/>
		</OptionTable>
	);
};

export default SteelOption;
