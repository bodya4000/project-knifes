export type CatalogInterval = {
	min?: number;
	max?: number;
	currentMin?: number;
	currentMax?: number;
};

export type CheckBoxItem = {
	name: string;
	count: number;
};

export interface IOptions {
	price: CatalogInterval;
	manufactures: CheckBoxItem[] | undefined;
	steels: CheckBoxItem[] | undefined;
	handles: CheckBoxItem[] | undefined;
	guards: CheckBoxItem[] | undefined;
	totalLength: CatalogInterval;
	bladeLength: CatalogInterval;
	bladeWidth: CatalogInterval;
	rating: number | undefined;
}
