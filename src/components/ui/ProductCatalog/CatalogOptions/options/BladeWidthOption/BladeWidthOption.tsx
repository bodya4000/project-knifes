import { FC } from 'react';
import { useDispatch } from 'react-redux';
import useCatalogOptionSelector from '../../../../../../hooks/useCatalogOptionSelector';
import { setBladeWidth } from '../../../../../../store/catalog';
import { debounceFunction } from '../../../../../../utils/CatalogUtills';
import SliderAndResultView from '../../views/SliderAndResultView/SliderAndResultView';
import OptionTable from '../OptionTable/OptionTable';

interface Props {}

const BladeWidthOption: FC<Props> = ({}) => {
	const { bladeWidth } = useCatalogOptionSelector();

	const dispatch = useDispatch();

	const debouncedOnchangeBladeWidth = debounceFunction(
		(min: number | undefined, max: number | undefined) => {
			dispatch(
				setBladeWidth({ ...bladeWidth, currentMax: max, currentMin: min })
			);
		}
	);

	return (
		<OptionTable title='Blade width, mm'>
			<SliderAndResultView
				onDataChange={debouncedOnchangeBladeWidth}
				data={bladeWidth}
			/>
		</OptionTable>
	);
};

export default BladeWidthOption;
