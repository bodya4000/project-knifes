export interface IKnife {
	id: number;
	name: string;
	size: string;
	material: string;
	rating: number;
	questioners: number;
	price: number;
	imageUrl: string;
}

export interface IKnifeDetail {
	id: number;
	name: string;
	size: string;
	material: string;
	rating: number;
	questioners: number;
	price: number;
	imageUrl: string;
	category: string;
	knifeWorkshop: string;
	sharpeningAndPolishing: string;
	buttCap: string;
}

export interface IKnifeCart {
	name: string;
	imageUrl: string;
	count: number;
	price: number;
	totalPrice: number;
}

export interface IKnifeOrder {
	id: number;
	name: string;
	imageUrl: string;
	count: number;
	price: number;
}

interface Interval {
	max: number | undefined;
	min: number | undefined;
}

export interface IKnifeOptionsRequest {
	price: Interval;
	manufacturer: string | undefined;
	steel: string | undefined;
	handle: string | undefined | undefined;
	guard: string | undefined;
	totalLength: Interval;
	bladeLength: Interval;
	bladeWidth: Interval;
	rating: number | undefined;
}
