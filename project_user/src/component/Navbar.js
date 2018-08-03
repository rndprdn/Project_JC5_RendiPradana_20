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
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Produk</a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Kontak Kami</a>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Kategori <span className="caret" /></a>
                          <ul className="dropdown-menu" style={{marginLeft: "0.1px"}}>
                            <li><Link to="/ProductDetails"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> Ghamis</Link></li>
                            <li><Link to="/ProductList"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> Jubba</Link></li>
                            <li><Link to="/Checkout"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> Kurta</Link></li>
                            <li><Link to="/Profile"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> Peci</Link></li>
                            <li><Link to="/Invoice"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> Sirwal</Link></li>
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