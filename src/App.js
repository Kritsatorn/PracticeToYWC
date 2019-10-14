import './App.css'
import React, { Component } from 'react';
import Home from './container/Home';
import About from './container/About';
import Order from './container/order/Order';
import Product from './container/product/Product';
import NotFound from './container/error/NotFound';
import ProductEdit from './container/product/ProductEdit';
import { BrowserRouter , Route , Switch} from 'react-router-dom';
class App extends Component {
	renderRouter() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/orders" component={Order} />

				<Route exact path="/products" component={Product} />
				<Route exact path="/products/add" component={ProductEdit} />
				<Route exact path="/products/edit/:id" component={ProductEdit} />

				<Route component={ NotFound } />
			</Switch>
		);
	}

	render() {
		return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
	}

}

export default App;
