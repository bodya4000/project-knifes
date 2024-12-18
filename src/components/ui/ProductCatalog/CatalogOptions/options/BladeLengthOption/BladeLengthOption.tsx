import { FC } from 'react';
import { useDispatch } from 'react-redux';
import useCatalogOptionSelector from '../../../../../../hooks/useSelectors/useCatalogOptionSelector';
import { setBladeLength } from '../../../../../../store/catalog';
import { debounceFunction } from '../../../../../../utils/CatalogUtills';
import SliderAndResultView from '../../views/SliderAndResultView/SliderAndResultView';
import OptionTable from '../OptionTable/OptionTable';

interface Props {}

const BladeLengthOption: FC<Props> = ({}) => {
	const { bladeLength } = useCatalogOptionSelector();

	const dispatch = useDispatch();

	const debouncedOnchangeBladeLength = debounceFunction(
		(min: number | undefined, max: number | undefined) => {
			dispatch(
				setBladeLength({ ...bladeLength, currentMax: max, currentMin: min })
			);
		}
	);

	return (
		<OptionTable title='Blade length, mm'>
			<SliderAndResultView
				onDataChange={debouncedOnchangeBladeLength}
				data={bladeLength}
			/>
		</OptionTable>
	);
};

export default BladeLengthOption;
