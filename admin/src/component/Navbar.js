import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from './img/bewok.png';

export default class componentName extends Component {
  render() {
    return (
      <div>
        <header className="main-header">
          <Link to="/dashboard" className="logo">
            <span className="logo-mini"><b>M</b>B</span>
            <span className="logo-lg"><b>MY</b> - BRAND</span>
          </Link>
          <nav className="navbar navbar-static-top" role="navigation">
            <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
              <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                <li className="dropdown user user-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <img src={Logo} className="user-image" alt="User Image" />
                    <span className="hidden-xs">Rendi Pradana</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="user-header">
                      <img src={Logo} className="img-circle" alt="User Image" />
                      <p>
                        Rendi Pradana - ADMIN
                      </p>
                    </li>
                    <li className="user-footer">
                      <div className="pull-left">
                        <a href="#" className="btn btn-default btn-flat">Profile</a>
                      </div>
                      <div className="pull-right">
                        <Link to="/logout" className="btn btn-default btn-flat">Sign out</Link>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}
