export const formatPhoneNumber = (phone: string) => {
	const digitsOnly = phone.replace(/\D/g, '');

	// const countryCodes: Record<string, string> = {
	// 	'380': '+380',
	// 	'1': '+1',
	// 	'44': '+44',
	// 	'49': '+49',
	// 	'33': '+33',
	// };

	// for (const code in countryCodes) {
	// 	if (digitsOnly.startsWith(code)) {
	// 		return `${countryCodes[code]}${digitsOnly.slice(code.length)}`;
	// 	}
	// }
	return digitsOnly;
};
