import { createContext, FC, ReactNode, useState } from 'react';

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
	const [isAuthenticated, setIsAuthenticated] = useState(
		Boolean(localStorage.getItem('accessToken'))
	);
	const login = () => setIsAuthenticated(true);
	const logout = () => setIsAuthenticated(false);

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
