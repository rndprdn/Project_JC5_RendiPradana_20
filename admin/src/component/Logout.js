import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default class Logout extends Component {
  render() {

    const cookies = new Cookies();
    cookies.remove('data');

    if(cookies.get('data') === undefined){
      return <Redirect to="/" />
    }

    return (
      <div>
        
      </div>
    )
  }
}
