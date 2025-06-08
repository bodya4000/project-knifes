import { FC } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import ProductDetailView from '../../components/ProductDetail/ProducDetailView/ProductDetailView'
import useKnife from '../../hooks/useKnife'
import useOptions from '../../hooks/useOptions'

const ProductDetail: FC = () => {
	const [searchParams] = useSearchParams()
	const id = searchParams.get('id')

	const { knifesData, isLoading, isError } = useKnife(Number(id))
	const { data: optionsData } = useOptions()
	const navigate = useNavigate()
	if (isError) {
		alert('failed to load product')
		navigate(-1)
		return
	}

	if (isLoading) {
		return (
			<div style={{ minHeight: 1000 }}>
				<h1>Loading...</h1>
			</div>
		)
	}

	return (
		<>
			{knifesData && optionsData && (
				<ProductDetailView
					optionsData={optionsData}
					productData={knifesData}
				/>
			)}
		</>
	)
}

export default ProductDetail
