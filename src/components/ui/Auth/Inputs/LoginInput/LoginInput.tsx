import { AUTH_VALIDATION } from '@/assets/data';
import { AuthFormFields } from '@/assets/types/Forms';
import { CustomInput, InputError } from '@/components/ui';
import { forwardRef } from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';

interface AuthInputProps {
	control: Control<AuthFormFields>;
	error?: FieldError;
}

const LoginInput = forwardRef<HTMLInputElement, AuthInputProps>(({ control, error }, ref) => {
	return (
		<>
			<Controller
				name='phoneNumber'
				control={control}
				rules={{
					required: AUTH_VALIDATION.errors.REQUIRED,
					minLength: {
						value: AUTH_VALIDATION.requirements.PHONE_NUMBER_MIN_LEN,
						message: AUTH_VALIDATION.errors.PHONE_NUMBER_MIN_LEN,
					},
				}}
				render={({ field }) => (
					<CustomInput type='tel' placeholder='Phone number' {...field} ref={ref} />
				)}
			/>
			<InputError error={error} />
		</>
	);
});

export default LoginInput;
