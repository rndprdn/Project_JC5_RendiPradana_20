import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="#">Admin Panel</a>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><a href="#"><i class="fa fa-home fa-fw"></i> Website</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user fa-fw"></i> Rendi Pradana <b class="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a></li>
                            <li><a href="#"><i class="fa fa-gear fa-fw"></i> Setting</a></li>
                            <li role="separator" className="divider" />
                            <li><Link to="/"><i class="fa fa-sign-out fa-fw"></i> Logout</Link></li>
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
