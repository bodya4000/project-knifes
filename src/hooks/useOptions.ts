import { useQuery } from '@tanstack/react-query';
// import { useDispatch } from 'react-redux';
import CatalogOptionsService from '../services/CatalogOptionsService';
// import { setOptionsLoadedTrue } from '../store/catalogOptionsReducer';
// import useCatalogOptionSelector from './useSelectors/useCatalogOptionSelector';

const useOptions = () => {
	// const { optionLoaded } = useCatalogOptionSelector();
	// const dispatch = useDispatch();
	const { data, isSuccess, isLoading, error } = useQuery({
		queryKey: ['options'],
		queryFn: () => CatalogOptionsService.getOptions(),
		select: data => data.data,
		// staleTime: 10000
		// enabled: !optionLoaded,
	});

	// if (data && isSuccess) {
	// 	dispatch(setOptionsLoadedTrue());
	// }

	return { data, isSuccess, isLoading, error };
};

export default useOptions;
