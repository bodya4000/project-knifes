import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './components/screens/ErrorPage/ErrorPage';
import Layout from './components/screens/Layout';
import Main from './components/screens/Main/Main';
import ProductDetail from './components/screens/ProductDetail/ProductDetail';
import ProductsCatalog from './components/screens/ProductsCatalog/ProductsCatalog';
import './index.css';
import { AuthProvider } from './providers/AuthProvider';
import { store } from './store/store';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Layout />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: '',
					element: <Main />,
				},
				{
					path: 'product',
					element: <ProductDetail />,
				},
				{
					path: 'products_catalog',
					element: <ProductsCatalog />,
				},
			],
		},
	],
	{
		basename: '/project-knifes',
	}
);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<RouterProvider router={router} />
					<ToastContainer position='top-center' />
				</AuthProvider>
			</QueryClientProvider>
		</Provider>
	</>
);
