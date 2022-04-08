import { db } from '../index.js'
import { ref, onValue } from 'firebase/database'
import { useState, useEffect } from 'react'

function useGetAllProducts () {
	const [products, setProducts] = useState(null);
	
	useEffect(() => {
		const productsRef = ref(db, 'products');
		
		const unsubscribe = onValue(productsRef, (snapshot) => {
			console.log("setting products!");
			setProducts(snapshot.val());
		});
		
		return () => {
			unsubscribe();
		};
	}, []);
	
	return products;
}

export default useGetAllProducts;