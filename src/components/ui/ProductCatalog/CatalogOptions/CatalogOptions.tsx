import { FC } from 'react';
import useOptions from '../../../../hooks/useOptions';
import useStoreOptions from '../../../../hooks/useStoreOptions';
import styles from './CatalogOptions.module.scss';
import BladeLengthOption from './options/BladeLengthOption/BladeLengthOption';
import BladeWidthOption from './options/BladeWidthOption/BladeWidthOption';
import GuardOption from './options/GuardOption/GuardOption';
import HandleOption from './options/HandleOption/HandleOption';
import ManufactorerOption from './options/ManufacturerOption/ManufacturerOption';
import PriceOption from './options/PriceOption/PriceOption';
import RatingOption from './options/RatingOption/RatingOption';
import SteelOption from './options/SteelOption/SteelOption';
import TotalLengthOption from './options/TotalLengthOption/TotalLengthOption';

interface Props {
	propsStyles?: string;
}

const CatalogOptions: FC<Props> = ({ propsStyles }) => {
	const { data, isLoading, error } = useOptions();
	useStoreOptions(data);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return (
			<div>
				Error:{' '}
				{error?.message || 'There was an error fetching the options data.'}
			</div>
		);
	}

	if (data) {
		return (
			<div>
				<div className={`${styles.options} ${propsStyles && propsStyles}`}>
					<div className={styles.options__title}>
						<h2>Фильтр товаров</h2>
					</div>
					<PriceOption />
					<ManufactorerOption manufacturers={data.manufactures} />
					<SteelOption steels={data.steels} />
					<HandleOption handles={data.handles} />
					<GuardOption guards={data.guards} />
					<TotalLengthOption />
					<BladeLengthOption />
					<BladeWidthOption />
					<RatingOption />
				</div>
			</div>
		);
	}
};

export default CatalogOptions;
