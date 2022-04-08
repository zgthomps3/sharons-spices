import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard.js'

function ProductForm() {
	const { id } = useParams();
	
	return (
		<div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
			<form>
				<div>
					<label>Product Image</label>
					<div style={{ height: '3rem', borderStyle: 'solid' }} />
				</div>
				<div>
					<label htmlFor='name'>Product Name</label>
					<input type='text' name='name' id='name' />
				</div>
				<div>
					<label htmlFor='price'>Product Price</label>
					<input type='number' name='price' id='price' min='0.01' step='0.01' />
				</div>
				<div>
					<label htmlFor='description'>Product Description</label>
					<input type='text' name='description' id='description' />
				</div>
			</form>
			<ProductCard name={id} image={'/placeholder.png'} />
		</div>
	);
}

export default ProductForm