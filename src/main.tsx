import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/screens/Layout';
import Main from './components/screens/Main/Main';
import ProductDetail from './components/screens/ProductDetail/ProductDetail';
import ProductsCatalog from './components/screens/ProductsCatalog/ProductsCatalog';
import Header from './components/ui/Header/Header';
import './index.css';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: (
			<>
				<Header />
				<div>eror</div>
			</>
		),
		children: [
			{
				path: '/',
				element: <Main />,
			},
			{
				path: '/product',
				element: <ProductDetail />,
			},
			{
				path: '/products_catalog',
				element: <ProductsCatalog />,
			},
			{
				path: '/about',
				element: <>hello</>,
			},
			{
				path: '/contacts',
				element: <>hello</>,
			},
			{
				path: '/news',
				element: <>hello</>,
			},
			{
				path: '/payment_and_delivery',
				element: <>hello</>,
			},
			{
				path: '/my_account',
				element: <>hello</>,
			},
		],
	},
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<ToastContainer
					position="top-center"
				/>
			</QueryClientProvider>
		</Provider>
	</>
);
