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
                <Link to="/" className="navbar-brand">Beranda</Link>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="dropdown">
                    <Link to="/productlist" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Produk</Link>
                  </li>
                  <li>
                    <Link to="/gamis"> Ghamis</Link>
                  </li>
                  <li>
                    <Link to="/jubba"> Jubba</Link>
                  </li>
                  <li>
                    <Link to="/kurta"> Kurta</Link>
                  </li>
                  <li>
                    <Link to="/peci"> Peci</Link>
                  </li>
                  <li>
                    <Link to="/sirwal"> Sirwal</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
  }
}
export default Navbar;