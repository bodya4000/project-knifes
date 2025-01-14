import { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import AuthService from '../services/AuthService';

const useCheckAuth = () => {
	const { isAuthenticated, login, logout } = useContext(AuthContext);

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const token = localStorage.getItem('accessToken');
				if (token) {
					const isValid = await AuthService.ping();
					if (isValid) {
						login();
					} else {
						logout();
					}
				} else {
					logout();
				}
			} catch (error) {
				console.error('Error during authentication check:', error);
				logout();
			}
		};

		checkAuth();
	}, [login, logout]);

	return { isAuthenticated };
};

export default useCheckAuth;
