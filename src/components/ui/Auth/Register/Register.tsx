import { FC, useContext } from 'react';
import { AuthPageContext } from '../../../screens/Auth/Auth';
import CustomImage from '../../common/CustomImage/CustomImage';
import CustomLink from '../../common/CustomLink/CustomLink';
import RegisterForm from './Form/RegisterForm';
import styles from './Register.module.scss';

interface RegisterProps {
	propName?: string;
}

const Register: FC<RegisterProps> = () => {
	const { togglePage } = useContext(AuthPageContext);
	return (
		<div className={styles.login}>
			<div className={styles.login_body}>
				<CustomImage
					alt='Knives shop Logo'
					src='assets/images/logo.svg'
					propsStyles={styles.login_logo}
				/>

				<RegisterForm />

				<div className={styles.login_links}>
					<CustomLink
						noRedirect={true}
						propsStyles={styles.login_link}
						link='/'
						onClick={togglePage}
					>
						Already have an account!
					</CustomLink>
				</div>
			</div>
		</div>
	);
};

export default Register;
