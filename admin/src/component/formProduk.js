import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default class formProduk extends Component {

    state = {
        dataCategory: [],
        dataSize: [],
        category: '',
        size: '',
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

    kirimData = (e) => {
        axios.post('http://localhost:8000/kirimdata', {
            namaproduk: e.namaproduk.value,
            hargaproduk: e.hargaproduk.value,
            category: this.category.value,
            deskripsi: e.desc.value,
            sizeproduk: this.sizeproduk.value,
            quantity: e.qty.value
        })
        window.location.reload()
        this.setState({
            status: true
        })
    }

  render() {

    if(this.state.status === true){
        return <Redirect to="/listproduk" />
    }

    const category = this.state.dataCategory.map((item, index) => {
        var idCategory = item.id;
        var categoryName = item.category;

        return <option key={index} value={idCategory}>{categoryName}</option>
    })

    const size = this.state.dataSize.map((item, index) => {
        var idSize = item.id;
        var sizeList = item.size;

        return <option key={index} value={idSize}>{sizeList}</option>
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
                                <form className="form-horizontal">
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
                                                <select ref={select => this.category = select} name="category" class="form-control">
                                                    <option selected disabled>-- Pilih Satu --</option>
                                                    {category}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Size :</label>
                                            <div className="col-sm-2">
                                                <select ref={select => this.size = select} name="size" class="form-control">
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
                                            <label className="col-sm-2 control-label">Foto Produk :</label>
                                            <div className="col-sm-10">
                                                <input type="file" className="form-control-file" />
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
                                        <button type="button" onClick={() => this.kirimData(this.refs)} className="btn btn-success pull-right">Submit</button>
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
