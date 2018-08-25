import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import Cookies from 'universal-cookie';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const cookies = new Cookies();

export default class editForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
        id: '',
        idCategory: '',
        namaProduk: '',
        hargaProduk: '',
        deskripsi: '',
        qty: '',
        size: '',
        status: false
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) =>{
      this.setState({
        deskripsi: e.target.value
      });
    }

    componentDidMount(){
        var id = this.props.location.state.idproduk;
        console.log(id);
        axios.get('http://localhost:8000/editform/'+ id)
        .then((ambilData) => {
            console.log(ambilData.data);
            this.setState({
                id: ambilData.data[0].id,
                idCategory: ambilData.data[0].category_id,
                namaProduk: ambilData.data[0].nama_produk,
                hargaProduk: ambilData.data[0].harga,
                deskripsi: ambilData.data[0].deskripsi,
                qty: ambilData.data[0].qty,
                size: ambilData.data[0].size,
            })
        })
    }

    updateData = (e) => {
      // e.preventDefault();
      // console.log(e.harga.value)
      axios.post('http://localhost:8000/editform', {
        idProduk: e.idproduk.value,
        namaProduk: e.namaproduk.value,
        hargaProduk: e.harga.value,
        qty: e.qty.value,
        deskripsi: e.desc.value
      })
      window.location.reload();
      this.setState({
        status: true
      })
    }

  render() {

    if(cookies.get('userID') === undefined){
      return <Redirect to="/" />
    }

    if(this.state.status === true){
       return <Redirect to="/listproduk" />
    }

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
                                            <label className="col-sm-2 control-label">Qty :</label>
                                            <div className="col-sm-1">
                                                <input ref="qty" type="number" className="form-control" defaultValue={this.state.qty} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Size :</label>
                                            <div className="col-sm-1">
                                                <input ref="size" type="number" className="form-control" defaultValue={this.state.size} disabled />
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
                                                <textarea ref="desc" className="form-control" value={this.state.deskripsi} onChange={this.handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        <button type="button" onClick={() => this.updateData(this.refs)} className="btn btn-success pull-right">Submit</button>
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
