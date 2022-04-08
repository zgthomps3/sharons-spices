import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard.js'

function ProductForm() {
	const { id } = useParams();
	
	return <p>Temporary: { id }</p>
}

export default ProductForm