import { AUTH_VALIDATION } from '@/assets/data';
import { AuthFormFields } from '@/assets/types/Forms';
import { forwardRef } from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { CustomInput, InputError } from '@/components/ui'

interface EmailInputProps {
	control: Control<AuthFormFields>;
	error?: FieldError;
}

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(({ control, error }, ref) => {
	return (
		<>
			<Controller
				name='email'
				control={control}
				rules={{
					required: AUTH_VALIDATION.errors.REQUIRED,
					pattern: {
						value: AUTH_VALIDATION.requirements.EMAIL_PATTERN,
						message: AUTH_VALIDATION.errors.EMAIL_PATTERN,
					},
				}}
				render={({ field }) => (
					<CustomInput type={'email'} placeholder={'Email'} {...field} name={'email'} ref={ref} />
				)}
			/>

			<InputError error={error} />
		</>
	);
});

export default EmailInput;
