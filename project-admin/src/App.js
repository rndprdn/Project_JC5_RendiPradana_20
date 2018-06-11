import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import admIndex from './component/admIndex';
import admInvoice from './component/admInvoice';
import admProduct from './component/admProduct';
import admLogin from './component/admLogin';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={admLogin} />
        <Route path="/admIndex" component={admIndex} />
        <Route path="/admInvoice" component={admInvoice} />
        <Route path="/admProduct" component={admProduct} />
      </div>
    );
  }
}

export default App;
