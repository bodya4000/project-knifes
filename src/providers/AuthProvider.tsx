import { FC, ReactNode, createContext, useEffect, useState } from 'react'

import { AuthTokenService } from '@/services/auth'

interface AuthContextType {
	isAuthenticated: boolean
	login: () => void
	logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
	isAuthenticated: false,
	login: () => {},
	logout: () => {}
})

interface ProviderProps {
	children: ReactNode
}

export const AuthProvider: FC<ProviderProps> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	useEffect(() => {
		const checkAuth = async () => {
			const token = await AuthTokenService.getToken()
			setIsAuthenticated(!token || token == 'null' ? false : true)
		}

		checkAuth()
	}, [])
	const login = () => setIsAuthenticated(true)
	const logout = () => setIsAuthenticated(false)

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}
