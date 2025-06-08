import { forwardRef } from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'

import { AUTH_VALIDATION } from '@/assets/data'
import { AuthFormFields } from '@/assets/types/Forms'
import { CustomInput, InputError } from '@/components'

interface ConfirmPasswordInputProps {
	control: Control<AuthFormFields>
	error?: FieldError | undefined
}

const ConfirmPasswordInput = forwardRef<
	HTMLInputElement,
	ConfirmPasswordInputProps
>(({ control, error }, ref) => {
	return (
		<>
			<Controller
				name="confirmPassword"
				control={control}
				rules={{
					required: AUTH_VALIDATION.errors.REQUIRED,
					minLength: {
						value: AUTH_VALIDATION.requirements.PASSWORD_MIN_LEN,
						message: AUTH_VALIDATION.errors.PASSWORD_MIN_LEN
					}
				}}
				render={({ field }) => (
					<CustomInput
						type={'password'}
						placeholder={'Confirm Password'}
						{...field}
						name={'confirmPassword'}
						ref={ref}
					/>
				)}
			/>
			<InputError error={error} />
		</>
	)
})

export default ConfirmPasswordInput
