import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from './img/bewok.png';

export default class componentName extends Component {
  render() {
    return (
      <div>
        <header className="main-header">
          {/* Logo */}
          <Link to="/dashboard" className="logo">
            {/* mini logo for sidebar mini 50x50 pixels */}
            <span className="logo-mini"><b>M</b>B</span>
            {/* logo for regular state and mobile devices */}
            <span className="logo-lg"><b>MY</b> - BRAND</span>
          </Link>
          {/* Header Navbar */}
          <nav className="navbar navbar-static-top" role="navigation">
            {/* Sidebar toggle button*/}
            <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
              <span className="sr-only">Toggle navigation</span>
            </a>
            {/* Navbar Right Menu */}
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                {/* User Account Menu */}
                <li className="dropdown user user-menu">
                  {/* Menu Toggle Button */}
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    {/* The user image in the navbar*/}
                    <img src={Logo} className="user-image" alt="User Image" />
                    {/* hidden-xs hides the username on small devices so only the image appears. */}
                    <span className="hidden-xs">Rendi Pradana</span>
                  </a>
                  <ul className="dropdown-menu">
                    {/* The user image in the menu */}
                    <li className="user-header">
                      <img src={Logo} className="img-circle" alt="User Image" />
                      <p>
                        Rendi Pradana - ADMIN
                      </p>
                    </li>
                    <li className="user-footer">
                      <div className="pull-left">
                        <a href="#" className="btn btn-default btn-flat">Profile</a>
                      </div>
                      <div className="pull-right">
                        <a href="#" className="btn btn-default btn-flat">Sign out</a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}
