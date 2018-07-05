import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        {/* HEADER */}
        <header>
          {/* Top Header */}
          <div id="top-header">
            <div className="container">
              <div className="pull-left">
                <span>Welcome to My Brand!</span>
              </div>
              <div className="pull-right">
                <ul className="header-top-links">
                  <li><a href="#">Newsletter</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Top Header */}
          {/* header */}
          <div id="header">
            <div className="container">
              <div className="pull-left">
                {/* logo */}
                <div className="header-logo">
                  <Link to="/" className="logo">
                    <img src="img/logo.png" alt="Logo My Brand" />
                  </Link>
                </div>
                {/* logo */}
              </div>
              <div className="pull-right">
                <div className="header-account">
                  {/* account */}
                  <div className="login">
                    <li className="dropdown">
                      <div href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <div className="header-btn-icon">
                          <i className="fa fa-user-o" />
                        </div>
                        <strong className="text-uppercase">My Account <span className="caret" /></strong>
                      </div>
                      <Link to="/" className="text-uppercase">Login</Link>
                      <ul className="dropdown-menu">
                        <li><Link to="/Profile"><i className="fa fa-user-o" /> Profile</Link></li>
                        <li><Link to="/Checkout"><i className="fa fa-check" /> Checkout</Link></li>
                        <li><Link to="/Register"><i className="fa fa-user-plus" /> Create An Account</Link></li>
                      </ul>
                    </li>
                  </div>
                  {/* account */}
                  {/* Cart */}
                  <div className="cart">
                    <li className="dropdown">
                      <div href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <div className="header-btn-icon">
                          <i className="fa fa-shopping-cart" />
                          <span className="qty">2</span>
                        </div>
                        <strong className="text-uppercase">My Cart <span className="caret" /></strong>
                        <br />
                        <span>50.00$</span>
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
