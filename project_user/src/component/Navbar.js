import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-default">
                  <div className="container">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                      <Link to="/" className="navbar-brand">Home</Link>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Wanita <span className="caret" /></a>
                          <ul className="dropdown-menu">
                            <li><a href="#"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> Men Clothing</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> Women Clothing</a></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pria <span className="caret" /></a>
                          <ul className="dropdown-menu">
                            <li><a href="#"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> Men Pants</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> Women Pants</a></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="caret" /></a>
                          <ul className="dropdown-menu">
                            <li><Link to="/ProductDetails"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> Product Details</Link></li>
                            <li><Link to="/ProductList"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> List Product</Link></li>
                            <li><Link to="/Checkout"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> CheckOut</Link></li>
                            <li><Link to="/Profile"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> Profile</Link></li>
                            <li><Link to="/Invoice"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> Invoice</Link></li>
                            <li><Link to="/Cart"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> Cart</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>{/* /.navbar-collapse */}
                  </div>{/* /.container-fluid */}
              </nav>
        </div>
    );
  }
}
export default Navbar;