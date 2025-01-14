export const pcTopHeaderNav = ['About', 'Payment and delivery', 'News', 'Contacts'];
export const mobTopHeaderNav = ['Contacts', 'My account', 'Favorites', 'Cart'];
export const drawerNav = {
	my_account: [],
	catalog: ['army_knifes', 'kitchen_knifes'],
	contacts: [],
	news: [],
	payment_and_delivery: [],
	about_us: [],
};

export interface NavItem {
	[key: string]: string[];
}

export interface PCBottomHeaderNav {
	knifes_catalog: NavItem;
	bladed_weapon: NavItem;
	souvenir_products: NavItem;
	armytek_flashlights: NavItem;
	related_products: NavItem;
}

export const pcBottomHeaderNav: PCBottomHeaderNav = {
	knifes_catalog: {
		handles: ['Wood', 'G10', 'Micarta', 'Bone', 'Rubber'],
		steels: ['100x13', '40x102c2m', '95x8', '110x18'],
		manufactures: ['RazorSmiths', 'TacticalSteel', 'EliteForge', 'BladeCraft', 'EdgeCraft', 'ForgeWorks', 'SteelMaster', 'HuntBlades', 'SharpEdge', 'KnifeCo'],
		guards: ['Aluminum', 'Brass', 'Titanium', 'Lithium', 'Steel'],
	},
	bladed_weapon: {
		swords: ['some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link'],
		axes: ['some link', 'some link', 'some link', 'some link', 'some link'],
	},
	souvenir_products: {
		knife_category: ['some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link'],
		knife_production: ['some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link'],
		knives_by_steel_grade: ['some link', 'some link', 'some link', 'some link', 'some link', 'some link'],
		sharpening_and_polishing_knives: ['some link', 'some link', 'some link', 'some link', 'some link'],
		knife_workshop: ['some link', 'some link', 'some link', 'some link', 'some link', 'some link'],
		accessories: ['some link', 'some link', 'some link'],
	},
	armytek_flashlights: {
		tactical_flashlights: ['some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link'],
		specialty_flashlights: ['some link', 'some link', 'some link'],
	},
	related_products: {
		knife_sheaths: ['some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link', 'some link'],
		maintenance_tools: ['some link', 'some link', 'some link'],
	},
};
