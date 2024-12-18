import { FC } from 'react';

import { useDispatch } from 'react-redux';
import useCatalogOptionSelector from '../../../../../../hooks/useSelectors/useCatalogOptionSelector';
import { clearRating, setRating } from '../../../../../../store/catalog';
import CatalogCheckBox from '../../../../common/CatalogCheckBox/CatalogCheckBox';
import OptionTable from '../OptionTable/OptionTable';
import styles from './RatingOption.module.scss';

interface Props {}

const RatingOption: FC<Props> = ({}) => {
	const ratingStarlist = [1, 2, 3, 4, 5];

	const { rating } = useCatalogOptionSelector();

	const dispatch = useDispatch();

	const onChangeRating = (newRating: number) => {
		if (newRating === rating) {
			dispatch(clearRating());
		} else {
			dispatch(setRating(newRating));
		}
	};

	return (
		<OptionTable title='Rating'>
			<div className={styles.rating_row}>
				{ratingStarlist.reverse().map(iter => {
					return (
						<CatalogCheckBox
							key={iter}
							id={iter}
							stars={iter}
							value={rating === iter}
							callback={() => onChangeRating(iter)}
						/>
					);
				})}
			</div>
		</OptionTable>
	);
};

export default RatingOption;
