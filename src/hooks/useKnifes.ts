import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import knifesService from '../services/KnifesService';
import useCatalogOptionSelector from './useCatalogOptionSelector';

const useKnifes = () => {
	const data = useCatalogOptionSelector();

	const body = {
		price: { max: data.price.currentMax, min: data.price.currentMin },
		manufacturer: data.manufacturer,
		steel: data.steel,
		handle: data.handle,
		guard: data.guard,
		totalLength: {
			max: data.totalLength.currentMax,
			min: data.totalLength.currentMin,
		},
		bladeLength: {
			max: data.bladeLength.currentMax,
			min: data.bladeLength.currentMin,
		},
		bladeWidth: {
			max: data.bladeWidth.currentMax,
			min: data.bladeWidth.currentMin,
		},
		rating: data.rating,
	};

	const {
		data: knifesData,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ['knifes'],
		queryFn: () => knifesService.getKnives(body, { sort: data.sort.backValue }),
		select: data => data.data,
	});

	useEffect(() => {
		refetch();
	}, [data, refetch]);

	return { knifesData, isLoading, isError, error };
};

export default useKnifes;
