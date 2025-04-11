import { AUTH_VALIDATION } from '@/assets/data';
import { AuthFormFields } from '@/assets/types/Forms';
import { ApplicationService } from '@/services';
import { FC, useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useFormErrorNotifications from '../../../../../hooks/useFormErrorNotifications';
import { AuthContext } from '../../../../../providers/AuthProvider';
import NotificationsService from '../../../../../services/NotificationsService';
import BlackButton from '../../../common/BlackButton/BlackButton';
import { LoginInput, PasswordInput } from '../../Inputs';
import styles from './LoginForm.module.scss';

const LoginForm: FC = () => {
	const { login } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthFormFields>({
		mode: 'onSubmit',
		defaultValues: { phoneNumber: '', password: '' },
		reValidateMode: 'onChange',
	});

	const submitLogin: SubmitHandler<AuthFormFields> = async values => {
		setLoading(true);
		const { phoneNumber, password } = values;
		const authRes = await ApplicationService.login(phoneNumber, password, login);
		if (!authRes) NotificationsService.error(AUTH_VALIDATION.errors.DEFAULT_ERROR);
		setLoading(false);
	};

	useFormErrorNotifications(errors);

	return (
		<form className={styles.form} onSubmit={handleSubmit(submitLogin)}>
			<LoginInput control={control} error={errors.phoneNumber} />
			<PasswordInput control={control} error={errors.password} />
			<BlackButton submit text='Login' loading={loading} />
		</form>
	);
};

export default LoginForm;
