import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div id="top-header">
            <div className="container">
              <div className="pull-left">
                <span>Welcome to My Brand!</span>
              </div>
              <div className="pull-right">
                <ul className="header-top-links">
                  <li><h5 data-toggle="modal" data-target="#myModal">Login</h5></li>
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
                  <div className="cart">
                    <li className="dropdown">
                      <div href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <div className="header-btn-icon">
                          <i className="fa fa-shopping-cart" />
                          <span className="qty">0</span>
                        </div>
                        <strong className="text-uppercase">Keranjang <span className="caret" /></strong>
                        <br />
                        <span>Rp. 0</span>
                      </div>
                      <ul className="dropdown-menu">
                      </ul>
                    </li>
                  </div>
                  {/* /Cart */}
                </div>
              </div>
            </div>
            {/* container */}
          </div>
          {/* header */}
        </header>
        {/* HEADER */}
      </div>
    );
  }
}

export default Header;
