import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default class editForm extends Component {

    state = {
        id: '',
        idCategory: '',
        namaProduk: '',
        hargaProduk: '',
        deskripsi: ''
    }

    componentDidMount(){
        var id = this.props.location.state.idproduk;
        console.log(id);
        axios.get('http://localhost:8000/editdata/'+ id)
        .then((ambilData) => {
            console.log(ambilData.data);
            this.setState({
                id: ambilData.data[0].id,
                idCategory: ambilData.data[0].category_id,
                namaProduk: ambilData.data[0].nama_produk,
                hargaProduk: ambilData.data[0].harga,
                deskripsi: ambilData.data[0].deskripsi
            })
        })
    }

    updateData = (e) => {
        axios.post('http://localhost:8000/editdata', {
            namaProduk: e.namaproduk.value,
            hargaProduk: e.harga.value
        })
    }

  render() {
    return (
        <div className="wrapper">
            <Navbar />
            <Sidebar />
            <div className="content-wrapper">
                <section class="content-header">
                    <h1>Edit Data</h1>
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
                                            <label className="col-sm-2 control-label">Produk ID :</label>
                                            <div className="col-sm-1">
                                                <input ref="idproduk" type="text" className="form-control" defaultValue={this.state.id} disabled />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Nama Produk :</label>
                                            <div className="col-sm-10">
                                                <input ref="namaproduk" type="text" className="form-control" defaultValue={this.state.namaProduk} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Category :</label>
                                            <div className="col-sm-1">
                                                <input ref="categoryid" type="number" className="form-control" defaultValue={this.state.idCategory} disabled />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Harga :</label>
                                            <div className="col-sm-10">
                                                <input ref="harga" type="number" className="form-control" defaultValue={this.state.hargaProduk} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Foto Produk :</label>
                                            <div className="col-sm-10">
                                                <input ref="" type="file" className="form-control-file" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Deskripsi :</label>
                                            <div className="col-sm-10">
                                                <textarea className="form-control" value={this.state.deskripsi} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        <button onClick={() => this.updateData(this.refs)} className="btn btn-success pull-right">Submit</button>
                                        <Link to="/listproduk" className="btn btn-danger">Cancel</Link>
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
