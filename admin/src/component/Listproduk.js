import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';

import Sidebar from './Sidebar';
import Navbar from './Navbar';

const cookies = new Cookies();

export default class ListProduk extends Component {

  state = {
    dataproduk: []
  }

  componentDidMount(){
    axios.get('http://localhost:8000/')
    .then((ambilData) => {
      console.log(ambilData.data)
      this.setState({
        dataproduk: ambilData.data
      })
    })
  }

  deleteData = (e) => {
    axios.post('http://localhost:8000/deletedata/', {
      idProduk: e
    })
    .then((ambilData) => {
      if(ambilData){
        axios.get('http://localhost:8000/')
        .then((ambilData) => {
          this.setState({
            dataproduk: ambilData.data
          })
        })
      }
    })
  }

  render() {

    if(cookies.get('data') === undefined){
      return <Redirect to="/" />
    }

    const hasil = this.state.dataproduk.map((item, index) => {
      var nomor = index + 1;
      var produkId = item.id;
      var categoryId = item.category_id;
      var namaProduk = item.nama_produk;
      var hargaProduk = item.harga;
      var descProduk = item.deskripsi;
      var sizeProduk = item.size;
      var qty = item.qty;
      var fotoProduk = item.foto_produk;

      return <tr key={index} style={{textAlign: 'center'}}>
              <td>{nomor}</td>
              <td>{categoryId}</td>
              <td>{namaProduk}</td>
              <td>{hargaProduk}</td>
              <td>{fotoProduk}</td>
              <td>{descProduk}</td>
              <td>{sizeProduk}</td>
              <td>{qty}</td>
              <td style={{textAlign: 'left'}}>
                <span>
                  <Link to={{ pathname:'/editform', state: {idproduk: produkId}}} className="btn btn-warning"><i class="fa fa-pencil-square-o"></i></Link>&nbsp;  
                  <button onClick={() => this.deleteData(produkId)} className="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></button>  
                </span>   
              </td>
            </tr>    
    });

    return (
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <section className="content-header">
            <h1>List Produk</h1>
            <ol className="breadcrumb">
              <li><Link to="/dashboard"><i className="fa fa-dashboard"></i> Dashboard</Link></li>
              <li><Link to="#">Data</Link></li>
              <li className="active">List Produk</li>
            </ol>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-xs-12">
                <div className="box box-info">
                  <div className="box-body">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th style={{textAlign: 'center'}}>No</th>
                          <th style={{textAlign: 'center'}}>Category id</th>
                          <th style={{textAlign: 'center'}}>Nama Produk</th>
                          <th style={{textAlign: 'center'}}>Harga</th>
                          <th style={{textAlign: 'center'}}>Foto Produk</th>
                          <th style={{textAlign: 'center'}}>Deskripsi</th>
                          <th style={{textAlign: 'center'}}>Size id</th>
                          <th style={{textAlign: 'center'}}>Qty</th>
                          <th style={{textAlign: 'center'}}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {hasil}
                      </tbody>
                      {/* <tfoot>
                        <tr>
                          <th>Rendering engine</th>
                          <th>Browser</th>
                          <th>Platform(s)</th>
                          <th>Engine version</th>
                          <th>CSS grade</th>
                        </tr>
                      </tfoot> */}
                    </table>
                  </div>
                  {/* /.box-body */}
                </div>
                {/* /.box */}
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
