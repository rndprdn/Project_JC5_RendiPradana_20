import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer" className="section section-grey">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="footer">
                  <div className="footer-logo">
                    <Link to="/" className="logo">
                      <img src="./img/logo.png" alt="logo" />
                    </Link>
                  </div>
                  <h5> Samse Jakarta.</h5>
                  <h5>Jl. Songsi 1 Dalam, Jakarta Barat, Jakarta 11210</h5>
                  <ul className="footer-social">
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="footer">
                  <h3 className="footer-header">My Account</h3>
                  <ul className="list-links">
                    <li><Link to="/profile">My Account</Link></li>
                    <li><Link to="/cart">My Cart</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="footer">
                  <h3 className="footer-header">Customer Service</h3>
                  <ul className="list-links">
                    <li><Link to="/contact">Kontak Kami</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="footer-copyright">
                  Copyright ©  All Rights Reserved <Link to="/" target="_blank">Samse Jakarta</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
