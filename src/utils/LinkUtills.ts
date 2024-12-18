export const normalizeLink = (link: string) => {
	return link.replace(/\s+/g, '_').toLowerCase();
};

export const renormalizeLink = (link: string) => {
	return link.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
};
