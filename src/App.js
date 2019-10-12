import './App.css';
import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductItem from './components/product/ProductItem';
import Monitor from './components/monitor/Monitor';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product:""
    }
  }

  componentDidMount() {
    this.setState({
      product : [
        { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
        { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
        { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
        { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
        { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
        { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
      ]
    })
  }

  render(){
    return (
      <div >
        <Header />
        <Monitor product={this.state.product} />
        <Footer company="Tangk_Krit" email="kritsatorn@hotmail.co.th"/>
      </div>
    );
  }

}

export default App;