import { db } from '../index.js'
import { ref, onValue } from 'firebase/database'
import { useState, useEffect } from 'react'

function useGetAllProducts () {
	const [products, setProducts] = useState(null);
	
	const productsRef = ref(db, 'products');
	
	useEffect(() => {
		onValue(productsRef, (snapshot) => {
			setProducts(snapshot.val());
		});
		return () => {
			productsRef.off();
		};
	});
	
	return products;
}

export default useGetAllProducts;