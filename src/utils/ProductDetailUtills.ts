import { IKnifeDetail } from '../models/Knife';

export const parseDataInfoArrayWithKeysAndValue = (productData: IKnifeDetail) => {
	return [
		{
			keyValue: 'category',
			value: productData.category,
		},
		{
			keyValue: 'material',
			value: productData.material,
		},
		{
			keyValue: 'Sharpening And Polishing',
			value: productData.sharpeningAndPolishing,
		},
		{
			keyValue: 'buttcap',
			value: productData.buttCap,
		},
	];
};
