import { useSelector } from 'react-redux';
import { UserState } from '../store/store.ts';

const useCatalogOptionSelector = () => {
	return useSelector((state: UserState) => state.catalogOptions);
};

export default useCatalogOptionSelector;
