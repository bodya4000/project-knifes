import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from '../components'
import Header from '../components/Header/Header'
import useAuth from '../hooks/useAuth'
import common from '../styles/common.module.scss'
import { Auth } from './Auth/Auth'
import ProductsCatalog from './ProductsCatalog/ProductsCatalog'

interface Props {
	error?: boolean
}

const Layout: FC<Props> = ({ error }: Props) => {
	const { isAuthenticated } = useAuth()

	console.log(`isAuthenticated ${isAuthenticated}`)

	if (!isAuthenticated) {
		return <Auth />
	}

	return (
		<div className={common._wrapper}>
			<Header />
			{/* ProductsCatalog instead of Error Page */}
			<main id="detail">{error ? <ProductsCatalog /> : <Outlet />}</main>
			<Footer />
		</div>
	)
}

export default Layout
