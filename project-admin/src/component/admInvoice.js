import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class admInvoice extends Component {
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
                    <Link to="/admIndex"><i className="fa fa-dashboard fa-fw" /> Dashboard</Link>
                </li>
                <li>
                    <Link to="/admInvoice" className="active"><i className="fa fa-table fa-fw" /> History Invoice</Link>
                </li>
                <li>
                    <Link to="/admProduct"><i className="fa fa-table fa-fw" /> Product</Link>
                </li>
                </ul>
            </div>
        </div>

        <div id="page-wrapper">
            <div className="row">
                <div className="col-lg-12">
                <h1 className="page-header">Tables</h1>
                </div>
                {/* /.col-lg-12 */}
            </div>
            {/* /.row */}
            <div className="row">
                <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                    History Invoice    
                    </div>
                    {/* /.panel-heading */}
                    <div className="panel-body">
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Invoice Number</th>
                            <th>Date Transaction</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Rendi Pradana</td>
                            <td>#INV00001</td>
                            <td>30 May 2018</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Emma Watson</td>
                            <td>#INV00002</td>
                            <td>29 May 2018</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Bruno</td>
                            <td>#INV00003</td>
                            <td>25 May 2018</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Mark</td>
                            <td>#INV00004</td>
                            <td>24 May 2018</td>
                        </tr>      
                        </tbody>
                    </table> 
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

export default admInvoice;