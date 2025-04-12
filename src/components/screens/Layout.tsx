import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'
import common from '../../styles/common.module.scss'
import { Footer } from '../ui'
import Header from '../ui/Header/Header'
import { Auth } from './Auth/Auth'
import ProductsCatalog from './ProductsCatalog/ProductsCatalog'

interface Props {
	error?: boolean
}

const Layout: FC<Props> = ({ error }: Props) => {
	const { isAuthenticated } = useAuth()
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
