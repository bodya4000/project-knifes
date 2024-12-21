import { FC, useContext } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import useFormErrorNotifications from '../../../../../hooks/useFormErrorNotifications';
import { AuthContext } from '../../../../../providers/AuthProvider';
import AuthService from '../../../../../services/AuthService';
import NotificationsService from '../../../../../services/NotificationsService';
import { formatPhoneNumber } from '../../../../../utils/FormUttils';
import BlackButton from '../../../common/BlackButton/BlackButton';
import AuthInput from '../../AuthInput/AuthInput';
import styles from './RegisterForm.module.scss';

interface FormData {
	phoneNumber: string;
	password: string;
	confirmPassword: string;
	email: string;
}

interface RegisterFormProps {
	propName?: string;
}

// requirements
const PHONE_NUMBER_MIN_LEN = 9;
const PASSWORD_MIN_LEN = 8;
const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// errors
const DEFAULT_ERROR = 'Wrong phone number or password!';
const REQUIRED_FIELD_ERROR = 'This field is required!';
const PHONE_NUMBER_MIN_LEN__ERROR = `Phone number must be at least ${PHONE_NUMBER_MIN_LEN} characters`;
const EMAIL_PATTERN__ERROR = 'Please enter a valid email address';
const PASSWORD_MIN_LEN__ERROR = `Password must be at least ${PASSWORD_MIN_LEN} characters`;
const CONFIRM_PASSWORD__ERROR = 'Passwords do not match!';

const RegisterForm: FC<RegisterFormProps> = () => {
	const { login } = useContext(AuthContext);

	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<FormData>({
		reValidateMode: 'onChange',
	});

	const submitRegister: SubmitHandler<FormData> = async values => {
		const { phoneNumber, password } = values;
		try {
			const { data } = await AuthService.register(phoneNumber, password);
			const { status, message, body } = data;
			if (status == 200 && body?.accessToken) {
				login();
				localStorage.setItem('accessToken', body.accessToken);
				NotificationsService.success(message);
			} else {
				throw new Error(DEFAULT_ERROR);
			}
		} catch (_) {
			NotificationsService.error(DEFAULT_ERROR);
		}
	};

	useFormErrorNotifications(errors);

	return (
		<form className={styles.form} onSubmit={handleSubmit(submitRegister)}>
			<Controller
				name='phoneNumber'
				control={control}
				rules={{
					required: REQUIRED_FIELD_ERROR,
					minLength: {
						value: PHONE_NUMBER_MIN_LEN,
						message: PHONE_NUMBER_MIN_LEN__ERROR,
					},
				}}
				render={({ field }) => (
					<AuthInput
						{...field}
						type='tel'
						placeholder='Phone number'
						onChange={e => field.onChange(formatPhoneNumber(e.target.value))}
					/>
				)}
			/>
			{errors.phoneNumber && (
				<span>{errors.phoneNumber.message || DEFAULT_ERROR}</span>
			)}

			<Controller
				name='email'
				control={control}
				rules={{
					required: REQUIRED_FIELD_ERROR,
					pattern: {
						value: EMAIL_PATTERN,
						message: EMAIL_PATTERN__ERROR,
					},
				}}
				render={({ field }) => (
					<AuthInput {...field} type='email' placeholder='Email' />
				)}
			/>
			{errors.email && <span>{errors.email.message || DEFAULT_ERROR}</span>}

			<Controller
				name='password'
				control={control}
				rules={{
					required: REQUIRED_FIELD_ERROR,
					minLength: {
						value: PASSWORD_MIN_LEN,
						message: PASSWORD_MIN_LEN__ERROR,
					},
				}}
				render={({ field }) => (
					<AuthInput {...field} type='password' placeholder='Password' />
				)}
			/>
			{errors.password && (
				<span>{errors.password.message || DEFAULT_ERROR}</span>
			)}

			<Controller
				name='confirmPassword'
				control={control}
				rules={{
					required: REQUIRED_FIELD_ERROR,
					validate: value =>
						value === watch('password') || CONFIRM_PASSWORD__ERROR,
				}}
				render={({ field }) => (
					<AuthInput
						{...field}
						type='password'
						placeholder='Confirm Password'
					/>
				)}
			/>
			{errors.confirmPassword && (
				<span>{errors.confirmPassword.message || DEFAULT_ERROR}</span>
			)}

			<button type='submit'>
				<BlackButton text='Register' />
			</button>
		</form>
	);
};

export default RegisterForm;
