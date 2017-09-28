import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'
import ProductForm from './ProductForm.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: data.products
    }

    this.addProduct = this.addProduct.bind(this)
    this.removeProduct = this.removeProduct.bind(this)
  }

  addProduct(product) {
    const p = {
      name: product.name,
      description: product.description
    }

    // Use spread syntax to push product object to start
    // of products array.
    this.setState({
      products: [p, ...this.state.products]
    })
  }

  removeProduct(product) {
    const products = this.state.products.filter(p => p.name !== product.name)
    this.setState({
      products
    })
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 2- Add and remove objects</h2>
      </div>
      <div className='add-product'>
        <ProductForm onSubmit={this.addProduct}/>
      </div>
      <div className='products-container'>
        <Products products={this.state.products} onRemove={this.removeProduct} />
      </div>
    </div>
  }
}

export default App