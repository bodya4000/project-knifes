import { FC, useContext } from 'react';
import { AuthPageContext } from '../../../screens/Auth/Auth';
import CustomImage from '../../common/CustomImage/CustomImage';
import CustomLink from '../../common/CustomLink/CustomLink';
import LoginForm from '../Login/Form/LoginForm';
import styles from './Login.module.scss';

interface LoginProps {
	propName?: string;
}

const Login: FC<LoginProps> = () => {
	const { togglePage } = useContext(AuthPageContext);
	return (
		<div className={styles.login}>
			<div className={styles.login_body}>
				<CustomImage
					alt='Knives shop Logo'
					src='src/assets/images/logo.svg'
					propsStyles={styles.login_logo}
				/>

				<LoginForm />

				<div className={styles.login_links}>
					<CustomLink
						noRedirect={true}
						propsStyles={styles.login_link}
						link='/'
						onClick={togglePage}
					>
						I'm new!
					</CustomLink>
					<CustomLink
						noRedirect={true}
						propsStyles={styles.login_link}
						link='/'
					>
						Forgot password?
					</CustomLink>
				</div>
			</div>
		</div>
	);
};

export default Login;
