import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

import Navbar from '../src/component/Navbar';
import Header from '../src/component/Header';
import HeaderUser from './component/HeaderLogin';
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
import Login from './component/Login';
import Logout from './component/Logout';
import Contact from './component/Contact';

class App extends Component {
  render() {

    const cookies = new Cookies();
    let mycookie = cookies.get('userID');
    let Navigation = (!mycookie) ? <Header /> : <HeaderUser />

    return (
      <div>
        {Navigation}
        <Navbar />
          <Route exact path="/" component={Homepage} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/productDetails" component={ProductDetails} />
          <Route path="/productList" component={ProductList} />  
          <Route path="/invoice" component={Invoice} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/contact" component={Contact} />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default App;
