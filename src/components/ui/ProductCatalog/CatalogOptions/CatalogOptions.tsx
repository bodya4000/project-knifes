import { FC } from 'react';
import { useDispatch } from 'react-redux';
import useOptions from '../../../../hooks/useOptions';
import useStoreOptions from '../../../../hooks/useStoreOptions';
import { loading } from '../../../../store/catalog';
import AI from '../../common/AI/AI';
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
	const dispatch = useDispatch();
	useStoreOptions(data);

	if (isLoading) {
		return <AI color='black' />;
	}

	if (error) {
		window.location.reload();
		return (
			<div>
				<AI color='black' />
			</div>
		);
	}

	if (data) {
		dispatch(loading(true));
		return (
			<div>
				<div className={`${styles.options} ${propsStyles && propsStyles}`}>
					<div className={styles.options__title}>
						<h2>Catalog Options</h2>
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
