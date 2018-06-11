import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

class admProduct extends Component {
  render() {
    return (
      <div>

      <Navbar />

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
                    <Link to="admIndex"><i className="fa fa-dashboard fa-fw" /> Dashboard</Link>
                </li>
                <li>
                    <Link to="admInvoice"><i className="fa fa-table fa-fw" /> History Invoice</Link>
                </li>
                <li>
                    <Link to="admProduct" className="active"><i className="fa fa-table fa-fw" /> Product</Link>
                </li>
                </ul>
            </div>
        </div>

        <div id="page-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">Product</h1>
            </div>
            {/* /.col-lg-12 */}
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  Add Product
                </div>
                {/* /.panel-heading */}
                <div className="panel-body">
                  <div className="dataTable_wrapper">
                    <div className="row">
                      <div className="col-md-2">
                        <dl>
                          <dt>Product Name: </dt>
                          <dd>
                              <form>
                                  <input style={{width: 150}}></input>
                              </form>
                          </dd>
                        </dl>
                      </div>
                      <div className="col-md-3">
                        <div className="btn btn-danger">
                          <h5><span className="glyphicon glyphicon-pencil" aria-hidden="true" />Add Products</h5>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <dl>
                          <dt>Product Categories: </dt>
                          <dd>
                            <select className="form-control form-control-sm" style={{width: 150}}>
                              <option> T-Shirt </option>
                              <option> Pants </option>
                              <option> Bag </option>
                              <option> Shoes </option>
                            </select>
                          </dd>
                        </dl>
                      </div>
                      <div className="col-md-3">
                        <div className="btn btn-danger">
                          <h5><span className="glyphicon glyphicon-pencil" aria-hidden="true" />Add Categories</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.table-responsive */}
                </div>
                {/* /.panel-body */}
              </div>
              {/* /.panel */}
            </div>
            {/* /.col-lg-12 */}
          </div>
          {/* /.row */}
        </div>
        {/* /#wrapper */}
        <div id="page-wrapper">
          {/* /.row */}
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  Displayed Product
                </div>
                {/* /.panel-heading */}
                <div className="panel-body">
                  <div className="dataTable_wrapper">
                    <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                      <thead>
                        <tr>
                          <th>Category</th>
                          <th>Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd gradeX">
                          <td>T-Shirt</td>
                          <td>Product Name Goes Here</td>
                          <td>
                            <button className="btn border" style={{backgroundColor: 'greenyellow', marginRight: 10}}>Edit</button>
                            <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                          </td>
                        </tr>
                        <tr className="even gradeC">
                          <td>Pants</td>
                          <td>Product Name Goes Here</td>
                          <td>
                            <button className="btn border" style={{backgroundColor: 'greenyellow', marginRight: 10}}>Edit</button>
                            <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                          </td>
                        </tr>
                        <tr className="even gradeC">
                          <td>Bag</td>
                          <td>Product Name Goes Here</td>
                          <td>
                            <button className="btn border" style={{backgroundColor: 'greenyellow', marginRight: 10}}>Edit</button>
                            <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                          </td>
                        </tr>
                        <tr className="even gradeC">
                          <td>Shoes</td>
                          <td>Product Name Goes Here</td>
                          <td>
                            <button className="btn border" style={{backgroundColor: 'greenyellow', marginRight: 10}}>Edit</button>
                            <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                          </td>
                        </tr>      
                      </tbody>
                    </table>
                  </div>
                  {/* /.table-responsive */}
                </div>
                {/* /.panel-body */}
              </div>
              {/* /.panel */}
            </div>
            {/* /.col-lg-12 */}
          </div>
          {/* /.row */}
        </div>
        {/* /#wrapper */}

      <Footer />

      </div>
    );
  }
}

export default admProduct;