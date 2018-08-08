import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default class Data extends Component {

  state = {
    dataCategory: [],
    dataSize: []
  }

  componentDidMount(){
    axios.get('http://localhost:8000/formproduk')
    .then((ambilData) => {
      this.setState({
        dataCategory: ambilData.data[0],
        dataSize: ambilData.data[1]
      })
    })
  }

  tambahCategory = (e) => {
    axios.post('http://localhost:8000/tambahcategory', {
      addCategory: e.namacategory.value
    })
  }

  deleteCategory = (e) => {
    axios.post('http://localhost:8000/deletecategory', {
      idCategory: e
    })
    .then((ambilData) => {
      if(ambilData){
        axios.get('http://localhost:8000/formproduk')
        .then((ambilData) => {
          this.setState({
            dataCategory: ambilData.data[0],
          })
        })
      }
    })
  }

  tambahSize = (e) => {
    axios.post('http://localhost:8000/tambahsize', {
      addSize: e.datasize.value
    })
  }

  deleteSize = (e) => {
    axios.post('http://localhost:8000/deletesize', {
      idSize: e
    })
    .then((ambilData) => {
      if(ambilData){
        axios.get('http://localhost:8000/formproduk')
        .then((ambilData) => {
          this.setState({
            dataSize: ambilData.data[1],
          })
        })
      }
    })
  }

  render() {

    const category = this.state.dataCategory.map((item, index) => {
      var idCategory = item.id;
      var categoryName = item.category;

      return  <tr key={index} style={{textAlign: 'center'}}>
                <td>{idCategory}</td>
                <td>{categoryName}</td>
                <td style={{textAlign: 'center'}}>
                  <span>  
                    <button onClick={() => this.deleteCategory(idCategory)} className="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></button>  
                  </span>   
                </td>
              </tr>
    })

    const size = this.state.dataSize.map((item, index) => {
      var idSize = item.id;
      var sizeList = item.size;

      return  <tr key={index} style={{textAlign: 'center'}}>
                <td>{idSize}</td>
                <td>{sizeList}</td>
                <td style={{textAlign: 'center'}}>
                  <span>  
                    <button onClick={() => this.deleteSize(idSize)} className="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></button>  
                  </span>     
                </td>
              </tr>
    })

    return (
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <section class="content-header">
            <h1>Data</h1>
            <ol class="breadcrumb">
                <li><Link to="/dashboard"><i class="fa fa-dashboard"></i> Dashboard</Link></li>
                <li class="active">Data</li>
            </ol>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-xs-6">
                <h1>Data Category</h1>
                <div className="box">
                  <div className="box-body">
                  <table id="example1" className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th style={{textAlign: 'center'}}>ID Category</th>
                          <th style={{textAlign: 'center'}}>Category</th>
                          <th style={{textAlign: 'center'}}>action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category}
                      </tbody>
                    </table>
                    <form className="form-horizontal">
                      <div className="box-body">
                        <h3>Tambah Category</h3>
                        <div className="form-group pull-left">
                            <label className="col-sm-4 control-label">Category :</label>
                            <div className="col-sm-6">
                                <input ref="namacategory" type="text" className="form-control" placeholder="Nama Category" />
                            </div>
                            <button onClick={() => this.tambahCategory(this.refs)} className="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i></button>  
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xs-6">
                <h1>Data Size</h1>
                <div className="box">
                  <div className="box-body">
                  <table id="example1" className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th style={{textAlign: 'center'}}>ID Size</th>
                          <th style={{textAlign: 'center'}}>Size</th>
                          <th style={{textAlign: 'center'}}>action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {size}
                      </tbody>
                    </table>
                    <form className="form-horizontal">
                      <div className="box-body">
                        <h3>Tambah Size</h3>
                        <div className="form-group pull-left">
                            <label className="col-sm-4 control-label">Size :</label>
                            <div className="col-sm-6">
                                <input ref="datasize" type="text" className="form-control" placeholder="Ukuran" />
                            </div>
                            <button onClick={() => this.tambahSize(this.refs)} className="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i></button>  
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
