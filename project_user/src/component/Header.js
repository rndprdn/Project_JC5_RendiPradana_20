import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div id="top-header">
            <div className="container">
              <div className="pull-left">
                <span>Welcome to SAMASE - JKT !</span>
              </div>
              <div className="pull-right">
                <ul className="header-top-links">
                  <li><Link to="/login"><h5>Login</h5></Link></li>
                  <li><Link to="/register"><h5>Register</h5></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div id="header">
            <div className="container">
              <div className="pull-left">
                <div className="header-logo">
                  <Link to="/" className="logo">
                    <img src="img/logo.png" alt="Logo My Brand" />
                  </Link>
                </div>
              </div>
              <div className="pull-right">
                <div className="header-account">
                  <Link to="/cart" className="cart">
                    <li className="dropdown">
                      <div href="#">
                        <div className="header-btn-icon">
                          <i className="fa fa-shopping-cart" />
                          <span className="qty">0</span>
                        </div>
                      </div>
                    </li>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
