import { FC, createContext, useState } from 'react'

import Login from '../../components/Auth/Login/Login'
import Register from '../../components/Auth/Register/Register'

interface AuthPageContextType {
	isLoginPage: boolean
	togglePage: () => void
}

export const AuthPageContext = createContext<AuthPageContextType>({
	isLoginPage: false,
	togglePage() {}
})

export const Auth: FC = () => {
	const [isLoginPage, setIsLoginPage] = useState(true)

	const togglePage = () => setIsLoginPage(prevState => !prevState)

	return (
		<AuthPageContext.Provider value={{ isLoginPage, togglePage }}>
			{isLoginPage ? <Login /> : <Register />}
		</AuthPageContext.Provider>
	)
}
