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
                      <img src="./img/logo.png" alt />
                    </Link>
                  </div>
                  <h5>PT My Brand Indonesia.</h5>
                  <h5>Jl. Songsi 1 Dalam, Jakarta Barat, Jakarta 11210</h5>
                  <ul className="footer-social">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-instagram" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="footer">
                  <h3 className="footer-header">My Account</h3>
                  <ul className="list-links">
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">My Cart</a></li>
                    <li><a href="#">Checkout</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="footer">
                  <h3 className="footer-header">Customer Service</h3>
                  <ul className="list-links">
                    <li><a href="#">Kontak Kami</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="footer-copyright">
                  Copyright ©  All Rights Reserved <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://www.facebook.com/Skate473" target="_blank">Rendi Pradana</a>
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
