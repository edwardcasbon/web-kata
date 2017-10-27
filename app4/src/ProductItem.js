import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ProductItem.css'

class ProductItem extends Component {
  render() {
    const name = this.props.product.name
    return <div className='product-item'>
      <div className='name'>
        <Link to={`/products/${name}`}>{name}</Link>
      </div>
    </div>
  }
}

export default ProductItem