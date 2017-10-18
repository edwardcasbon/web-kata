import React, { Component } from 'react'
import './Products.css'

class Product extends Component{
    constructor(props) {
        super(props)
        this.state = {
            showDescription: false
        }

        this.toggleDescription = this.toggleDescription.bind(this)
    }

    toggleDescription(){
        this.setState({
            showDescription: !this.state.showDescription
        })
    }

    render(){
        return <div className='product'>
            <div className='details'>
                <div className='name' onClick={this.toggleDescription}>
                    {this.props.product.name}
                    <span>{this.state.showDescription ? '-' : '+'}</span>
                </div>

                {this.state.showDescription && <div className='desc'>{this.props.product.description}</div>}
            </div>
            <div className='actions'>
                <div className='remove' title='fix me' onClick={() => this.props.removeProduct(this.props.product)}>x</div>
            </div>
        </div>
    }
}

class Products extends Component{
    render(){
        const filter = this.props.filter;
        const products = this.props.products.filter(function(p, i) {
            if (p.name.toLowerCase().match(filter) !== null) {
                return true;
            }

            return false;
        })

        return <div className='products'>
            {products.map(
                (p, i) => 
                <Product
                    product={p}
                    key={'product-' + i }
                    removeProduct={this.props.removeProduct}
                />
            )}
        </div>
    }
}

export default Products