import React, { Component } from 'react'
import data from './data.js'
import {Products} from './Products.js'
import 'honeycomb/dist/honeycomb.css'
import './App.css'

class App extends Component {
  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Welcome Introduction to <code>web-kata#1</code></h2>
      </div>
      <div className='products'>
        <Products products={data.products}/>
      </div>
    </div>
  }
}

export default App;