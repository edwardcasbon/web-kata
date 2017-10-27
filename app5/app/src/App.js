import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import 'whatwg-fetch'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import ProductForm from './ProductForm.js'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { products: [] }
    this.removeProduct = this.removeProduct.bind(this)
    this.addProduct = this.addProduct.bind(this)

    this.doApi({
      url: '/api/products/get'
    })
  }

  // Utility function to consume the API.
  doApi(config) {
    fetch(config.url, {
      method: config.method || 'GET',
      body: config.body || null,
      headers: config.headers || {}
    }).then(response => {
      return response.json()
    }).then(json => {
      this.setState({products: json})
    })
  }

  removeProduct(product) {
    this.doApi({
      url: `/api/products/delete/${product.name}`,
      method: 'DELETE'
    })
  }

  addProduct(product) {
    const p = {
      name: product.name,
      description: product.description
    }

    this.doApi({
      url: '/api/products/add',
      method: 'POST',
      body: JSON.stringify(p),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 5 - Interaction with backend server through REST API calls</h2>
      </div>
      <div className='products-add-product'><ProductForm onSubmit={this.addProduct}/></div>
      <div className='products-container'>
        <ProductMenu products={this.state.products} remove={this.removeProduct} />
        <Route exact path='/products/:productName' component={
          props => <ProductContainer {...props} products={this.state.products} />
        } />
      </div>
    </div>
  }
}

export default App
