import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default class formProduk extends Component {

    state = {
        dataCategory: [],
        dataSize: [],
        namaproduk: '',
        hargaproduk: '',
        category: '',
        size: '',
        gambarproduk1: '',
        gambarproduk2: '',
        gambarproduk3: '',
        gambarproduk4: '',
        desc: '',
        qty: '',
        status: false
    }

    componentDidMount(){
        axios.get('http://localhost:8000/formproduk')
        .then((ambilData) => {
            console.log(ambilData.data)
            this.setState({
                dataCategory: ambilData.data[0],
                dataSize: ambilData.data[1]
            })
        })
    }

    gambar = (e) => {
      switch(e.target.name){
        case 'gambarproduk': 
        this.setState({
          gambarproduk1: e.target.files[0],
          gambarproduk2: e.target.files[0]
        })
        break;
        default:
      }
    }

    tampungData = (e) => {
      var namaproduk = e.namaproduk.value;
      var hargaproduk = e.hargaproduk.value;
      var category = e.category.value;
      var deskripsi = e.desc.value;
      var sizeproduk = e.size.value;
      var quantity = e.qty.value;

      this.setState({
        namaproduk: namaproduk,
        hargaproduk: hargaproduk,
        category: category,
        size: sizeproduk,
        desc: deskripsi,
        qty: quantity
      })
    }

    kirimData = (e) => {
      e.preventDefault()
      let formproduk = new FormData();
      formproduk.append('categoryid', this.state.category);
      formproduk.append('size', this.state.size);
      formproduk.append('namaproduk', this.state.namaproduk);
      formproduk.append('hargaproduk', this.state.hargaproduk);
      formproduk.append('deskripsi', this.state.desc);
      formproduk.append('qty', this.state.qty);
      formproduk.append('gambarproduk1', this.state.gambarproduk1);
      formproduk.append('gambarproduk2', this.state.gambarproduk2);
      formproduk.append('gambarproduk3', this.state.gambarproduk3);
      formproduk.append('gambarproduk4', this.state.gambarproduk4);

      axios.post('http://localhost:8000/kirimdata', formproduk)
      .then((hasil) => {
        var respon = hasil.data; 
        if(respon === 1){
          this.setState({
            status: true
          })
        }
      })
    }

  render() {

    if(this.state.status === true){
      return <Redirect to="/" />
    }

    const category = this.state.dataCategory.map((item, index) => {
      var idCategory = item.id;
      var categoryName = item.category;

      return <option key={index} value={idCategory}>- {categoryName}</option>
    })

    const size = this.state.dataSize.map((item, index) => {
      var idSize = item.id;
      var sizeList = item.size;

      return <option key={index} value={idSize}>- {sizeList}</option>
    })


    return (
        <div className="wrapper">
            <Navbar />
            <Sidebar />
            <div className="content-wrapper">
                <section class="content-header">
                    <h1>Tambah Data</h1>
                    <ol class="breadcrumb">
                        <li><Link to="/dashboard"><i class="fa fa-dashboard"></i> Dashboard</Link></li>
                        <li><Link to="#">Tambah Data</Link></li>
                        <li class="active">Produk</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-info">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Produk</h3>
                                </div>
                                <form className="form-horizontal" onSubmit={this.kirimData}>
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Nama Produk :</label>
                                            <div className="col-sm-10">
                                                <input ref="namaproduk" type="text" className="form-control" placeholder="Nama Produk" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Category :</label>
                                            <div className="col-sm-2">
                                                <select ref="category" name="category" class="form-control">
                                                    <option selected disabled>-- Pilih Satu --</option>
                                                    {category}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Size :</label>
                                            <div className="col-sm-2">
                                                <select ref="size" name="size" class="form-control">
                                                    <option selected disabled>-- Pilih Satu --</option>
                                                    {size}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Quantity :</label>
                                            <div className="col-sm-2">
                                                <input ref="qty" type="number" className="form-control" placeholder="Jumlah Produk" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Harga :</label>
                                            <div className="col-sm-10">
                                                <input ref="hargaproduk" type="number" className="form-control" placeholder="Harga Produk" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Foto Produk1 :</label>
                                            <div className="col-sm-10">
                                                <input type="file" name="gambarproduk1" ref="gambarproduk1" className="form-control-file" onChange={this.gambar} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Foto Produk2 :</label>
                                            <div className="col-sm-10">
                                                <input type="file" name="gambarproduk2" ref="gambarproduk2" className="form-control-file" onChange={this.gambar} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Foto Produk3 :</label>
                                            <div className="col-sm-10">
                                                <input type="file" name="gambarproduk3" ref="gambarproduk3" className="form-control-file" onChange={this.gambar} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Foto Produk4 :</label>
                                            <div className="col-sm-10">
                                                <input type="file" name="gambarproduk4" ref="gambarproduk4" className="form-control-file" onChange={this.gambar} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Deskripsi :</label>
                                            <div className="col-sm-10">
                                                <textarea ref="desc" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        <button type="submit" onClick={() => this.tampungData(this.refs)} className="btn btn-success pull-right">Submit</button>
                                        <Link to="/listproduk" className="btn btn-danger">Cancel</Link>&nbsp;
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
  }
}
