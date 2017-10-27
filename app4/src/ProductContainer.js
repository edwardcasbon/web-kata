import React, { Component } from 'react'
import data from './data.js'
import './ProductContainer.css'
import Product from './Product.js'

class ProductContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: data.products
    }
  }

  render() {    
    const product = this.state.products.filter(p => {
      return p.name === this.props.match.params.product
    }).shift();
    return <div className='product-container'>
      <Product product={product} />
    </div>
  }
}

export default ProductContainer