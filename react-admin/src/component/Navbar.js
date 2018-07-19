import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link className="navbar-brand" to="/">MY - Brand</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Halaman <span className="caret" /></Link>
                  <ul className="dropdown-menu" role="menu">
                    <li><Link to="/formdata">Tambah Data</Link></li>
                    <li><Link to="/listproduk">List Produk</Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/login">Logout</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
