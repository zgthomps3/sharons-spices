import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'

class ProductCard extends React.Component {
	render() {
		return (
			<div className={styles.ProductCard}>
				<img src={this.props.image} alt="" className={styles.ProductImage} />
				<p className={styles.ProductName}>{this.props.name}</p>
				<p className={styles.ProductPrice}>{this.props.price}</p>
				<p className={styles.ProductDescription}>{this.props.description}</p>
				{ this.props.editable ? 
					<div className={styles.ProductButtons}>
						<Link to={'/dashboard/products/edit/' + this.props.id.toString()}><img src="/edit.svg" alt="Edit" /></Link>
						<Link to={'/dashboard/products/delete/' + this.props.id.toString()}><img src="/delete.svg" alt="Delete" /></Link>
					</div>
					: null
				}
			</div>
		);
	}
}

export default ProductCard;