import { AUTH_VALIDATION } from '@/assets/data';
import { AuthFormFields } from '@/assets/types/Forms';
import { CustomInput, InputError } from '@/components/ui';
import { forwardRef } from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';

interface PasswordInputProps {
	control: Control<AuthFormFields>;
	error?: FieldError | undefined;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	({ control, error }, ref) => {
		return (
			<>
				<Controller
					name='password'
					control={control}
					rules={{
						required: AUTH_VALIDATION.errors.REQUIRED,
						minLength: {
							value: AUTH_VALIDATION.requirements.PASSWORD_MIN_LEN,
							message: AUTH_VALIDATION.errors.PASSWORD_MIN_LEN,
						},
					}}
					render={({ field }) => (
						<CustomInput
							type={'password'}
							placeholder={'Password'}
							{...field}
							name={'password'}
							ref={ref}
						/>
					)}
				/>
				<InputError error={error} />
			</>
		);
	}
);

export default PasswordInput;
