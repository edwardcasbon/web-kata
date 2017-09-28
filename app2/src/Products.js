import React, { Component } from 'react'
import './Products.css'

class Product extends Component{
    constructor(props) {
        super(props)

        this.handleRemove = this.handleRemove.bind(this)
    }

    handleRemove(event) {
        event.preventDefault()
        this.props.onRemove(this.props.product)
    }

    render(){
        return <div className='product'>
            <div className='details'>
                <div className='name'>{this.props.product.name}</div>
                <div className='desc'>{this.props.product.description}</div>
            </div>
            <div className='actions'>
                <div className='remove' title='fix me' onClick={this.handleRemove}>x</div>
            </div>
        </div>
    }
}

class Products extends Component{
    render(){
        return <div className='products'>
            {this.props.products.map(
                (p, i) => 
                <Product product={p} key={'product-' + i } onRemove={this.props.onRemove}/>
            )}
        </div>
    }
}

export default Products