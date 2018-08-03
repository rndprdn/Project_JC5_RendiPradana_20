import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from './component/Login';
import Dashboard from './component/Dashboard';
import ListProduk from './component/Listproduk';
import formCategory from './component/formCategory';
import FormProduk from './component/formProduk';
import editForm from './component/editForm';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/listproduk" component={ListProduk} />
        <Route path="/formproduk" component={FormProduk} />
        <Route path="/formcategory" component={formCategory} />
        <Route path="/editform" component={editForm} />
      </div>
    )
  }
}

export default App;
