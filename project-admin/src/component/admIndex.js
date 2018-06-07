import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class admIndex extends Component {
  render() {
    return (
      <div>
          <div className="navbar-default sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse">
                <ul className="nav" id="side-menu">
                <li className="sidebar-search">
                    <div className="input-group custom-search-form">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">
                        <i className="fa fa-search" />
                        </button>
                    </span>
                    </div>
                    {/* /input-group */}
                </li>
                <li>
                    <Link to="admIndex" className="active"><i className="fa fa-dashboard fa-fw" /> Dashboard</Link>
                </li>
                <li>
                    <Link to="admInvoice"><i className="fa fa-table fa-fw" /> History Invoice</Link>
                </li>
                <li>
                    <Link to="admProduct"><i className="fa fa-table fa-fw" /> Product</Link>
                </li>
                </ul>
            </div>
        </div>

        <div id="page-wrapper">
            <div className="row">
                <div className="col-lg-12">
                <h1 className="page-header">Dashboard</h1>
                </div>
                {/* /.col-lg-12 */}
            </div>
            {/* /.row */}
            <div className="row">
                <div className="col-lg-3 col-md-8">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                    <div className="row">
                        <div className="col-xs-3">
                        <i className="fa fa-users fa-3x" aria-hidden="true" />
                        </div>
                        <div className="col-xs-9 text-right">
                        <div className="huge">129874</div>
                        <div>Customers</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className="panel panel-green">
                    <div className="panel-heading">
                    <div className="row">
                        <div className="col-xs-3">
                        <i className="fa fa-shopping-cart fa-3x" aria-hidden="true" />
                        </div>
                        <div className="col-xs-9 text-right">
                        <div className="huge">1300</div>
                        <div>Product</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className="panel panel-yellow">
                    <div className="panel-heading">
                    <div className="row">
                        <div className="col-xs-3">
                        <i className="fa fa-bar-chart fa-3x" aria-hidden="true" />
                        </div>
                        <div className="col-xs-9 text-right">
                        <div className="huge">398723</div>
                        <div>Visitors</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* /.row */}
            <div className="row">
                <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                    <i className="fa fa-user" /> Latest Users
                    </div>
                    {/* /.panel-heading */}
                    <div className="panel-body">
                    <table className="table table-striped table-hover">
                        <tbody><tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Joined</th>
                        </tr>
                        <tr>
                            <td>Ganis Ezra Saputra</td>
                            <td>ganis@gmail.com</td>
                            <td>30 March 2018</td>
                        </tr>
                        <tr>
                            <td>Laura</td>
                            <td>laura@gmail.com</td>
                            <td>28 March 2018</td>
                        </tr>
                        <tr>
                            <td>Emma Watson</td>
                            <td>watson@yahoo.com</td>
                            <td>25 March 2018</td>
                        </tr>
                        <tr>
                            <td>Lily J. Collins</td>
                            <td>collins@outlook.com</td>
                            <td>12 March 2018</td>
                        </tr>
                        </tbody></table> 
                    </div>
                    {/* /.panel-body */}
                </div> 
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default admIndex;