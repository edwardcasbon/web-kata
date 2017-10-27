import React, { Component } from 'react'
import './ProductMenu.css'
import { Link } from 'react-router-dom'

class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.remove = this.remove.bind(this)
  }

  remove() {
    this.props.remove(this.props.product)
  }

  render() {
    const name = this.props.product.name
    return <div className='product-item'>
      <div className='name'>
        <Link to={'/products/' + name}>{name}</Link>
        <button onClick={this.remove}>Remove</button>
      </div>
    </div>
  }
}

class ProductMenu extends Component {
  render() {
    return <div className='product-menu'>
      {this.props.products.map(
        (p, i) => <ProductItem product={p} key={'product-' + i} remove={this.props.remove} />
      )}
    </div>
  }
}

export default ProductMenu