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
                  {/* /footer logo */}
                  <h5>PT My Brand Indonesia.</h5>
                  <h5>Jl. Songsi 1 Dalam, Jakarta Barat, Jakarta 11210</h5>
                  {/* footer social */}
                  <ul className="footer-social">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-instagram" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                  </ul>
                  {/* /footer social */}
                </div>
              </div>
              {/* /footer widget */}
              {/* footer widget */}
              <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="footer">
                  <h3 className="footer-header">My Account</h3>
                  <ul className="list-links">
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">My Cart</a></li>
                    <li><a href="#">Checkout</a></li>
                    <li><a href="#">Login</a></li>
                  </ul>
                </div>
              </div>
              {/* /footer widget */}
              {/* footer widget */}
              <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="footer">
                  <h3 className="footer-header">Customer Service</h3>
                  <ul className="list-links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Shiping &amp; Return</a></li>
                    <li><a href="#">Shiping Guide</a></li>
                    <li><a href="#">FAQ</a></li>
                  </ul>
                </div>
              </div>
              {/* /footer widget */}
            </div>
            {/* /row */}
            <hr />
            {/* row */}
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                {/* footer copyright */}
                <div className="footer-copyright">
                  Copyright ©  All Rights Reserved <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://www.facebook.com/Skate473" target="_blank">Rendi Pradana</a>
                </div>
                {/* /footer copyright */}
              </div>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </footer>
      </div>
    );
  }
}

export default Footer;
