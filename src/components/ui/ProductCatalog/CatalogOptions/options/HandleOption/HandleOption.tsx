import { FC } from 'react';
import { useDispatch } from 'react-redux';
import useCatalogOptionSelector from '../../../../../../hooks/useSelectors/useCatalogOptionSelector';
import { clearHandle, setHandle } from '../../../../../../store/catalog';
import CheckBoxesView, {
	CheckBoxItem,
} from '../../views/CheckBoxesView/CheckBoxesView';
import OptionTable from '../OptionTable/OptionTable';

interface Props {
	handles: CheckBoxItem[] | undefined;
}

const HandleOption: FC<Props> = ({ handles }) => {
	const { handle } = useCatalogOptionSelector();

	const dispatch = useDispatch();

	const onChangeHandle = (newHandle: string) => {
		if (newHandle === handle) {
			dispatch(clearHandle());
		} else {
			dispatch(setHandle(newHandle));
		}
	};

	return (
		<OptionTable title='Handle'>
			<CheckBoxesView
				onChangeData={onChangeHandle}
				selectedCheckbox={handle}
				data={handles}
			/>
		</OptionTable>
	);
};

export default HandleOption;
