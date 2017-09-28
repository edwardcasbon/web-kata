import React, { Component } from 'react'
import './Products.css'

export class Products extends Component {
    render() {
        const products = this.props.products.map((product, index) => {
            return <Product product={product} key={index}/>
        });

        return <div>{products}</div>
    }
}

export class Product extends Component {
    classes() {
        let cs = ['product'];
        if (this.props.product.free) {
            cs.push('product--free');
        }

        if(this.props.product.new) {
            cs.push('product--new');
        }

        return cs.join(' ');
    }

    render() {
        return (<div className={this.classes()}>
            <div className="product__inner">
                <h3>{this.props.product.name}</h3>
                <p>{this.props.product.description}</p>
            </div>
        </div>)
    }
}