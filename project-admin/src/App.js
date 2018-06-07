import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import admIndex from './component/admIndex';
import admInvoice from './component/admInvoice';
import admProduct from './component/admProduct';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <Route exact path="/" component={admIndex} />
          <Route path="/admIndex" component={admIndex} />
          <Route path="/admInvoice" component={admInvoice} />
          <Route path="/admProduct" component={admProduct} />
        <Footer />
      </div>
    );
  }
}

export default App;
