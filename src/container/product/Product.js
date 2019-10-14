import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { withRouter } from 'react-router-dom';
import ProductList from '../../components/product/ProductList';
import { connect } from 'react-redux';
import { productFetch , productDelete} from '../../actions'

class Product extends Component {
  constructor(props) {
    super(props);
    this.delProduct = this.delProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount() {
    this.props.productFetch();
  }

  editProduct(product) {
    this.props.history.push('product/edit/'+product.id);
  }

  delProduct(product){
    this.props.productDelete(product.id);
  }

  render() {
    return(
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
              <div className="col-6">
                <h1>สินค้า</h1>
              </div>
              <div className="col-6">
                <button
                  className="btn btn-success title float-right"
                  onClick={() => this.props.history.push('products/add')}
                >
                  เพิ่ม
                </button>
              </div>
          </div>
          <ProductList
            products={this.props.products}
            onDelProduct={this.delProduct}
            onEditProduct={this.editProduct}
          />
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps({products}){
  return{products}
}

export default withRouter(connect(mapStateToProps ,{ productFetch , productDelete} )(Product));