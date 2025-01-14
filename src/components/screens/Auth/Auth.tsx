import { FC, createContext, useState } from 'react';
import Login from '../../ui/Auth/Login/Login';
import Register from '../../ui/Auth/Register/Register';

interface AuthPageContextType {
	isLoginPage: boolean;
	togglePage: () => void;
}

export const AuthPageContext = createContext<AuthPageContextType>({
	isLoginPage: false,
	togglePage() {},
});

export const Auth: FC = () => {
	const [isLoginPage, setIsLoginPage] = useState(true);
	const togglePage = () => setIsLoginPage(prevState => !prevState);

	return (
		<AuthPageContext.Provider value={{ isLoginPage, togglePage }}>
			{isLoginPage ? <Login /> : <Register />}
		</AuthPageContext.Provider>
	);
};
