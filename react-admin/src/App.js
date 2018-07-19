import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// component
import ListProduk from './component/ListProduk';
import Form from './component/Form';
import FormEdit from './component/FormEdit';
import Login from './component/Login';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Route exact path="/" component={ListProduk}></Route> */}
        <Route path="/login" component={Login}></Route>
        <Route path="/formdata" component={Form}></Route>
        <Route path="/editdata" component={FormEdit}></Route>
        <Route path="/listproduk" component={ListProduk}></Route>
      </div>
    );
  }
}

export default App;
