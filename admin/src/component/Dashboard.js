import React, { Component } from 'react';

import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="wrapper"> 
        <Navbar />
        <Sidebar />
        <div className="content-wrapper"></div>
      </div>
    )
  }
}
