import { FC } from 'react';

import SortOption from '../CatalogOptions/options/SortOption/SortOption';
import styles from './CatalogHeader.module.scss';

interface Props {
	propsStyles?: string;
}

const CatalogHeader: FC<Props> = ({ propsStyles }) => {
	return (
		<div
			className={`${styles.catalog_header} ${propsStyles ? propsStyles : ''}`}
		>
			<h1 className={styles.catalog_header__title}>Knifes</h1>

			<SortOption />
		</div>
	);
};

export default CatalogHeader;
