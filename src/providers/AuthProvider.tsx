import { AuthTokenService } from '@/services/auth';
import { createContext, FC, ReactNode, useEffect, useState } from 'react';

interface AuthContextType {
	isAuthenticated: boolean;
	login: () => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
	isAuthenticated: false,
	login: () => {},
	logout: () => {},
});

interface ProviderProps {
	children: ReactNode;
}

export const AuthProvider: FC<ProviderProps> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const checkAuth = async () => {
			const token = await AuthTokenService.getToken();
			setIsAuthenticated(!!token);
		};

		checkAuth();
	}, []);
	const login = () => setIsAuthenticated(true);
	const logout = () => setIsAuthenticated(false); // !!!!

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
