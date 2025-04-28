import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Auth } from './app/Auth/Auth'
import Layout from './app/Layout'
import Main from './app/Main/Main'
import ProductDetail from './app/ProductDetail/ProductDetail'
import ProductsCatalog from './app/ProductsCatalog/ProductsCatalog'
import './index.css'
import { AuthProvider } from './providers/AuthProvider'
import { store } from './store/store'

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Layout />,
			errorElement: <Layout error />,
			children: [
				{
					path: '',
					element: <Main />
				},
				{
					path: 'auth',
					element: <Auth />
				},
				{
					path: 'product',
					element: <ProductDetail />
				},
				{
					path: 'products_catalog',
					element: <ProductsCatalog />
				}
			]
		}
	],
	{
		basename: '/project-knifes/'
	}
)

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<RouterProvider router={router} />
					<ToastContainer
						style={{ zIndex: 10000 }}
						position="top-center"
					/>
				</AuthProvider>
			</QueryClientProvider>
		</Provider>
	</>
)
