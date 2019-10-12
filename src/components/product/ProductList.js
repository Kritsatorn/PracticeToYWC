import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {

  showProduct(){
    if(this.props.products){
      this.props.products.map(product => (
        <ProductItem
          productName ={product.productName}
          unitPrice ={product.unitPrice}
        />
      ))
    }
  }

  render() {
    return (
      <div className="row">
        <div>
      {this.showProduct()}
        </div>
      </div>
    );
  }
}

export default ProductList;