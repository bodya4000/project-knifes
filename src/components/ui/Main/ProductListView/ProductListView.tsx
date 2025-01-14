// import { FC, useEffect, useState } from 'react';

// import { ProductViewData } from '../../../../assets/types';
// import common from '../../../../styles/common.module.scss';
// import ProductView from '../../common/ProductView/ProductView';
// import TitleDefault from '../../common/TitleDefault/TitleDefault';
// import PageView from './PageView';
// import styles from './ProductListView.module.scss';


// const ProductListView: FC = () => {
// 	// const [loadedProducts, setLoadedProducts] = useState<ProductViewData[]>([]);
// 	// const [currentProducts, setCurrentProducts] = useState<ProductViewData[]>([]);
// 	// const [page, setPage] = useState<number>(1);

// 	// const pageSize = 4;

// 	// const setCurrentProductsByPage = () => {
// 	// 	const startIndex = (page - 1) * pageSize;
// 	// 	const productSlice = loadedProducts.slice(
// 	// 		startIndex,
// 	// 		startIndex + pageSize
// 	// 	);
// 	// 	setCurrentProducts(productSlice);
// 	// };

// 	// useEffect(() => {
// 	// 	setLoadedProducts(products);
// 	// }, []);

// 	// useEffect(() => {
// 	// 	setCurrentProductsByPage();
// 	// }, [page, loadedProducts]);

// 	// const pageList = Array.from(
// 	// 	{ length: Math.ceil(loadedProducts.length / pageSize) },
// 	// 	(_, index) => index + 1
// 	// );

// 	return (
// 		<section className={styles.products}>
// 			<div className={`${common._container} ${styles.products__container}`}>
// 				<TitleDefault title='Discounts' />
// 				<ul className={styles.products__list}>
// 					{currentProducts.map(product => (
// 						<ProductView key={product.name} product={product} />
// 					))}
// 				</ul>

// 				<div className={styles.products__pages}>
// 					<button
// 						disabled={page === 1}
// 						className={styles.products__page_nav}
// 						onClick={() => setPage(prev => Math.max(prev - 1, 1))}
// 					>
// 						&#8249;
// 					</button>
// 					{pageList.map((pageNumber: number) => {
// 						return <PageView active={pageNumber === page} key={pageNumber} />;
// 					})}
// 					<button
// 						disabled={page === pageList.length}
// 						className={styles.products__page_nav}
// 						onClick={() => setPage(prev => Math.min(prev + 1, pageList.length))}
// 					>
// 						&#8250;
// 					</button>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default ProductListView;
