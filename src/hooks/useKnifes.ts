import { useCallback, useEffect, useMemo } from 'react'

import { useQuery } from '@tanstack/react-query'

import knifesService from '../services/KnifesService'
import useCatalogOptionSelector from './useCatalogOptionSelector'

const useKnifes = () => {
	const data = useCatalogOptionSelector()
	const isOptionsLoading = data.optionLoaded

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

	const body = useMemo(() => {
		return {
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
		}
	}, [data])

	const {
		data: knifesData,
		isLoading: isKnifesLoading,
		isError,
		error,
		refetch
	} = useQuery({
		queryKey: ['knifes', body],

		queryFn: () => knifesService.getKnives(body, { sort: data.sort.backValue }),
		select: data => data,
		enabled: false
	})

	useEffect(() => {
		if (body && isOptionsFilled(body) && isOptionsLoading) {
			refetch()
		}
	}, [body, isOptionsLoading, refetch])

	return {
		knifesData,
		isLoading: isOptionsLoading || isKnifesLoading,
		isError,
		error
	}
}

export default useKnifes
