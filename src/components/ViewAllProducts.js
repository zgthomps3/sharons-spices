import React from 'react'
import useGetAllProducts from '../hooks/useGetAllProducts.js'
import ProductCard from './ProductCard.js'

function ViewAllProducts() {
	const products = useGetAllProducts();
	
	if (!products)
		return <p>Loading...</p>
	
	return (
		<div style={{ display: 'flex', gap: '1rem' }}>
			{
				Object.entries(products).map(
					(product) => {
						const key = product[0];
						const data = product[1];
						return <ProductCard key={key} id={key} name={data.name} image={data.image} price={'$' + (data.price/100).toString() } description={data.description} editable={true} />
					}
				)
			}
		</div>
	);
}

export default ViewAllProducts;