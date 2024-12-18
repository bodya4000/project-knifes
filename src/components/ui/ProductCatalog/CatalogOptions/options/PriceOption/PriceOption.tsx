import { FC, memo, useState } from 'react';

import { useDispatch } from 'react-redux';
import useCatalogOptionSelector from '../../../../../../hooks/useCatalogOptionSelector';
import { setPrice } from '../../../../../../store/catalog';
import { debounceFunction } from '../../../../../../utils/CatalogUtills';
import CustomImage from '../../../../common/CustomImage/CustomImage';
import SliderAndResultView from '../../views/SliderAndResultView/SliderAndResultView';
import styles from './PriceOption.module.scss';

interface Props {}

const PriceOption: FC<Props> = memo(({}) => {
	const [opened, setOpened] = useState<boolean>(true);

	const { price } = useCatalogOptionSelector();

	const dispatch = useDispatch();

	const debouncedOnchangePrice = debounceFunction(
		(min: number | undefined, max: number | undefined) => {
			dispatch(setPrice({ ...price, currentMax: max, currentMin: min }));
		}
	);

	return (
		<div className={styles.price_option}>
			<div className={styles.price_option__body}>
				<div className={styles.price_option__top}>
					<h3 className={styles.price_option__title}>Price</h3>

					<div
						className={styles.price_option__collapse_wrapper}
						onClick={() => setOpened(!opened)}
					>
						<CustomImage
							propsStyles={`${styles.price_option__collapse} ${
								!opened
									? styles.price_option__collapse_closed
									: styles.price_option__collapse_opened
							}`}
							src='src/assets/images/collapse_yellow.svg'
							alt='link'
						/>
					</div>
				</div>

				<div
					className={`${styles.price_option__slider} ${
						!opened && styles.price_option__slider_closed
					}`}
				>
					<SliderAndResultView
						data={price}
						onDataChange={debouncedOnchangePrice}
					/>
				</div>
			</div>
		</div>
	);
});

export default PriceOption;
