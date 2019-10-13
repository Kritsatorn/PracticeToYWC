import './App.css'
import React, { Component } from 'react';
import Home from './container/Home';
import About from './container/About';
import Order from './container/order/Order';
import Product from './container/product/Product';
import { BrowserRouter , Route , Switch} from 'react-router-dom';
class App extends Component {

  renderRouter() {
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/orders" component={Order} />
        <Route path="/products" component={Product} />
      </Switch>
    );
  }

  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
