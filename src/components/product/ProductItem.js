import React, { Component } from 'react';

class ProductItem extends Component {

  constructor(props) {
    super(props);
    
  }
  render() {
    const {productName , unitPrice} = this.props;
    return (
      <div>
        <p>{productName }</p>
        <p>{unitPrice}</p>
      </div>
    )
  }
}
export default ProductItem;