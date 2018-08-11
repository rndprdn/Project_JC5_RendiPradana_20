import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default class Logout extends Component {
  render() {

    const cookies = new Cookies();
    cookies.remove('userId');

    if(cookies.get('userId') === undefined){
      return <Redirect to="/" />
    }

    return (
      <div>
        
      </div>
    )
  }
}
