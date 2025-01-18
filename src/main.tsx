/* eslint-disable react-refresh/only-export-components */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy, ReactNode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './components/screens/Layout';
import AI from './components/ui/common/AI/AI';
import { AuthProvider } from './providers/AuthProvider';
import { store } from './store/store';

const ErrorPage = lazy(() => import('./components/screens/ErrorPage/ErrorPage'));
const ProductsCatalog = lazy(() => import('./components/screens/ProductsCatalog/ProductsCatalog'));
const ProductDetail = lazy(() => import('./components/screens/ProductDetail/ProductDetail'));
const Main = lazy(() => import('./components/screens/Main/Main'));

const lazyComponent = (component: ReactNode) => {
	return <Suspense fallback={<AI />}>{component}</Suspense>;
};

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Layout />,
			errorElement: lazyComponent(<ErrorPage />),
			children: [
				{
					path: '',
					element: lazyComponent(<Main />),
				},
				{
					path: 'product',
					element: lazyComponent(<ProductDetail />),
				},
				{
					path: 'products_catalog',
					element: lazyComponent(<ProductsCatalog />),
				},
			],
		},
	],
	{
		basename: '/project-knifes/',
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
