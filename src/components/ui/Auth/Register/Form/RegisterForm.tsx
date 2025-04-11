import { AUTH_VALIDATION } from '@/assets/data';
import { AuthFormFields } from '@/assets/types/Forms';
import { ApplicationService } from '@/services';
import { FC, useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useFormErrorNotifications from '../../../../../hooks/useFormErrorNotifications';
import { AuthContext } from '../../../../../providers/AuthProvider';
import NotificationsService from '../../../../../services/NotificationsService';
import BlackButton from '../../../common/BlackButton/BlackButton';
import { ConfirmPasswordInput, EmailInput, LoginInput, PasswordInput } from '../../Inputs';
import styles from './RegisterForm.module.scss';

interface RegisterFormProps {
	propName?: string;
}

const RegisterForm: FC<RegisterFormProps> = () => {
	const { login } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthFormFields>({
		reValidateMode: 'onChange',
	});

	const submitRegister: SubmitHandler<AuthFormFields> = async values => {
		setLoading(true);
		const { phoneNumber, password } = values;
		const authRes = await ApplicationService.register(phoneNumber, password, login);
		if (!authRes) NotificationsService.error(AUTH_VALIDATION.errors.DEFAULT_ERROR);
		setLoading(false);
	};

	useFormErrorNotifications(errors);

	return (
		<form className={styles.form} onSubmit={handleSubmit(submitRegister)}>
			<LoginInput control={control} error={errors.phoneNumber} />
			<EmailInput control={control} error={errors.email} />
			<PasswordInput control={control} error={errors.password} />
			<ConfirmPasswordInput control={control} error={errors.confirmPassword} />
			<BlackButton submit text='Register' loading={loading} />
		</form>
	);
};

export default RegisterForm;
