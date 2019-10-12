import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductItem from './components/product/ProductItem';

function App() {
  return (
    <div >
      <Header />
      <ProductItem productName="iPhone 11 pro max" unitPric="39900"/>
      <ProductItem productName="iPhone 11 pro" unitPric="34900"/>
      <ProductItem productName="iPhone 11" unitPric="24900"/>
      <Footer company="Apple" email="Hi"/>
    </div>
  );
}

export default App;