import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IOptions } from '../models/Catalog';
import {
	setBladeLength,
	setBladeWidth,
	setPrice,
	setTotalLength,
} from '../store/catalog';

const useStoreOptions = (data: Partial<IOptions> | undefined) => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (data) {
			const { price, totalLength, bladeLength, bladeWidth } = data;
			dispatch(
				setPrice({
					min: price?.min,
					currentMin: price?.min,
					max: price?.max,
					currentMax: price?.max,
				})
			);
			dispatch(
				setTotalLength({
					min: totalLength?.min,
					currentMin: totalLength?.min,
					max: totalLength?.max,
					currentMax: totalLength?.max,
				})
			);
			dispatch(
				setBladeLength({
					min: bladeLength?.min,
					currentMin: bladeLength?.min,
					max: bladeLength?.max,
					currentMax: bladeLength?.max,
				})
			);
			dispatch(
				setBladeWidth({
					min: bladeWidth?.min,
					currentMin: bladeWidth?.min,
					max: bladeWidth?.max,
					currentMax: bladeWidth?.max,
				})
			);
		}
	}, [data, dispatch]);
};

export default useStoreOptions;
