export const AUTH_VALIDATION = {
	requirements: {
		PHONE_NUMBER_MIN_LEN: 9,
		PASSWORD_MIN_LEN: 8,
		EMAIL_PATTERN: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
	},
	errors: {
		DEFAULT: 'Wrong phone number or password!',
		REQUIRED: 'This field is required!',
		PHONE_NUMBER_MIN_LEN: 'Phone number must be at least 9 characters',
		EMAIL_PATTERN: 'Please enter a valid email address',
		PASSWORD_MIN_LEN: 'Password must be at least 8 characters',
		CONFIRM_PASSWORD: 'Passwords do not match!',

		DEFAULT_ERROR: 'Wrong phone number or password!',
	},
};
