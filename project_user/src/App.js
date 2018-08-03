import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../src/component/Navbar';
import Header from '../src/component/Header';
import Homepage from '../src/component/Homepage';
import Subscribe from '../src/component/Subscribe';
import Footer from '../src/component/Footer';
import Profile from '../src/component/Profile';
import Register from '../src/component/Register'
import Checkout from '../src/component/Checkout';
import ProductDetails from '../src/component/ProductDetails';
import ProductList from '../src/component/ProductList';
import Invoice from '../src/component/Invoice';
import Cart from '../src/component/Cart';
import SideFilter from './component/SideFilter';
import Login from './component/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
          <Route exact path="/" component={Homepage} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Register" component={Register} />
          <Route path="/Checkout" component={Checkout} />
          <Route path="/ProductDetails" component={ProductDetails} />
          <Route path="/ProductList" component={ProductList} />  
          <Route path="/Invoice" component={Invoice} />
          <Route path="/Cart" component={Cart} />
          <Route path="/login" component={Login} />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default App;
