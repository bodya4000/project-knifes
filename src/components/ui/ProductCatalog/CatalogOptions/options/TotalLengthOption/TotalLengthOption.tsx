import { FC } from 'react';
import { useDispatch } from 'react-redux';
import useCatalogOptionSelector from '../../../../../../hooks/useSelectors/useCatalogOptionSelector';
import { setTotalLength } from '../../../../../../store/catalog';
import { debounceFunction } from '../../../../../../utils/CatalogUtills';
import SliderAndResultView from '../../views/SliderAndResultView/SliderAndResultView';
import OptionTable from '../OptionTable/OptionTable';

interface Props {}

const TotalLengthOption: FC<Props> = ({}) => {
	const { totalLength } = useCatalogOptionSelector();

	const dispatch = useDispatch();

	const debouncedOnchangeTotalLength = debounceFunction(
		(min: number | undefined, max: number | undefined) => {
			dispatch(
				setTotalLength({ ...totalLength, currentMax: max, currentMin: min })
			);
		}
	);
	return (
		<OptionTable title='Total length, mm'>
			<SliderAndResultView
				onDataChange={debouncedOnchangeTotalLength}
				data={totalLength}
			/>
		</OptionTable>
	);
};

export default TotalLengthOption;
