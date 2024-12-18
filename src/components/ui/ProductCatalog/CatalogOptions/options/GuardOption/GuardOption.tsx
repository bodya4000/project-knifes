import { FC } from 'react';
import { useDispatch } from 'react-redux';
import useCatalogOptionSelector from '../../../../../../hooks/useSelectors/useCatalogOptionSelector';
import { clearGuard, setGuard } from '../../../../../../store/catalog';
import CheckBoxesView, {
	CheckBoxItem,
} from '../../views/CheckBoxesView/CheckBoxesView';
import OptionTable from '../OptionTable/OptionTable';

interface Props {
	guards: CheckBoxItem[] | undefined;
}

const GuardOption: FC<Props> = ({ guards }) => {
	const { guard } = useCatalogOptionSelector();

	const dispatch = useDispatch();

	const onChangeGuard = (newGuard: string) => {
		if (newGuard === guard) {
			dispatch(clearGuard());
		} else {
			dispatch(setGuard(newGuard));
		}
	};

	return (
		<OptionTable title='Guards'>
			<CheckBoxesView
				onChangeData={onChangeGuard}
				selectedCheckbox={guard}
				data={guards}
			/>
		</OptionTable>
	);
};

export default GuardOption;
