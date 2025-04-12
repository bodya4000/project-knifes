import { useCallback, useEffect, useMemo } from 'react'

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'

import { IKnife } from '@/models'

import knifesService from '../services/KnifesService'
import useCatalogOptionSelector from './useCatalogOptionSelector'

type KnivesPage = {
	knives: IKnife[]
	totalPages: number
	currentPage: number
}

const useKnifes = () => {
	const data = useCatalogOptionSelector()

	const isOptionsLoading: boolean = data.optionLoaded

	const isOptionsFilled = useCallback(
		(options: Record<string, any>): boolean => {
			return Object.entries(options).some(([_, value]) => {
				if (value == null) return false
				if (typeof value === 'object' && 'min' in value && 'max' in value) {
					return value.min !== 0 || value.max !== 0
				}
				return true
			})
		},
		[]
	)

	const body = useMemo(
		() => ({
			price: { max: data.price.currentMax, min: data.price.currentMin },
			manufacturer: data.manufacturer,
			steel: data.steel,
			handle: data.handle,
			guard: data.guard,
			totalLength: {
				max: data.totalLength.currentMax,
				min: data.totalLength.currentMin
			},
			bladeLength: {
				max: data.bladeLength.currentMax,
				min: data.bladeLength.currentMin
			},
			bladeWidth: {
				max: data.bladeWidth.currentMax,
				min: data.bladeWidth.currentMin
			},
			rating: data.rating
		}),
		[data]
	)

	const {
		data: _rawResponse,
		isLoading: isKnifesLoading,
		isError,
		error,
		refetch,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage
	} = useInfiniteQuery<
		KnivesPage,
		Error,
		InfiniteData<KnivesPage>,
		[string, typeof body],
		number
	>({
		queryKey: ['knifes', body],
		initialPageParam: 0,
		queryFn: async ({ pageParam = 0 }) => {
			const res = await knifesService.getKnives(body, {
				sort: data.sort.backValue,
				page: pageParam
			})
			return {
				...res,
				currentPage: pageParam
			}
		},
		getNextPageParam: lastPage =>
			lastPage.currentPage < lastPage.totalPages
				? lastPage.currentPage + 1
				: undefined,
		enabled: false
	})

	useEffect(() => {
		if (isOptionsFilled(body) && isOptionsLoading) {
			void refetch()
		}
	}, [body, isOptionsLoading])

	const allKnives: IKnife[] =
		_rawResponse?.pages.flatMap(page => page.knives) ?? []
	const totalPages = _rawResponse?.pages[0]?.totalPages ?? 0

	return {
		knivesData: {
			knives: allKnives,
			totalPages: totalPages
		},
		isLoading: isOptionsLoading || isKnifesLoading,
		isError,
		error,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage
	}
}

export default useKnifes
