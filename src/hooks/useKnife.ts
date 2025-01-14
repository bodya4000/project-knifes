import { useQuery } from '@tanstack/react-query';
import knifesService from '../services/KnifesService';

const useKnife = (id: number) => {
	const {
		data: knifesData,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ['knifes', id],
		queryFn: () => knifesService.getKniveById(id),
		select: data => data.data,
	});

	return { knifesData, isLoading, isError, error };
};

export default useKnife;
