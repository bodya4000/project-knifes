import { FC, useContext } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import useFormErrorNotifications from '../../../../../hooks/useFormErrorNotifications';
import { AuthContext } from '../../../../../providers/AuthProvider';
import AuthService from '../../../../../services/AuthService';
import NotificationsService from '../../../../../services/NotificationsService';
import { formatPhoneNumber } from '../../../../../utils/FormUttils';
import BlackButton from '../../../common/BlackButton/BlackButton';
import AuthInput from '../../AuthInput/AuthInput';
import styles from './LoginForm.module.scss';

interface FormData {
	phoneNumber: string;
	password: string;
}

// requirements
const PHONE_NUMBER_MIN_LEN = 9;
const PASSWORD_MIN_LEN = 8;

// errors
const DEFAULT_ERROR = 'Wrong phone number or password!';
const REQUIRED_FIELD__ERROR = 'This field is required!';
const PHONE_NUMBER_MIN_LEN__ERROR = `Phone number must be at least ${PHONE_NUMBER_MIN_LEN} characters`;
const PASSWORD_MIN_LEN__ERROR = `Phone number must be at least ${PASSWORD_MIN_LEN} characters`;

const LoginForm: FC = () => {
	const { login } = useContext(AuthContext);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onSubmit',
		defaultValues: { phoneNumber: '', password: '' },
		reValidateMode: 'onChange',
	});

	const submitLogin: SubmitHandler<FormData> = async values => {
		const { phoneNumber, password } = values;
		try {
			const { data } = await AuthService.login(phoneNumber, password);
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
		<form className={styles.form} onSubmit={handleSubmit(submitLogin)}>
			<Controller
				name='phoneNumber'
				control={control}
				rules={{
					required: REQUIRED_FIELD__ERROR,
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
						onChange={e => {
							const formatted = formatPhoneNumber(e.target.value);
							field.onChange(formatted);
						}}
					/>
				)}
			/>
			{errors.phoneNumber && (
				<span className={styles.error}>{errors.phoneNumber.message}</span>
			)}

			<Controller
				name='password'
				control={control}
				rules={{
					required: REQUIRED_FIELD__ERROR,
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
				<span className={styles.error}>{errors.password.message}</span>
			)}

			<BlackButton submit text='Login' />
		</form>
	);
};

export default LoginForm;
