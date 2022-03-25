import React from 'react'
import styles from './ProductCard.module.css'

class ProductCard extends React.Component {
	render() {
		return (
			<div className={styles.ProductCard}>
				<img src={this.props.image} alt="" className={styles.ProductImage} />
				<p className={styles.ProductName}>{this.props.name}</p>
				<p className={styles.ProductPrice}>{this.props.price}</p>
				<p className={styles.ProductDescription}>{this.props.description}</p>
			</div>
		);
	}
}

export default ProductCard;