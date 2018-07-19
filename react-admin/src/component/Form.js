import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Form extends Component {

    kirimData = (e) => {
        // e.preventDefault();
        axios.post('http://localhost:8000/form', {
            dataSatu: e.namaproduk.value,
            dataDua: e.hargaproduk.value
        });
    }

  render() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <form className="form-horizontal">
                    <fieldset>
                        <legend>Tambah Data</legend>
                        <div className="form-group">
                            <label htmlFor="inputProduk" className="col-lg-2 control-label">Nama Produk</label>
                            <div className="col-lg-10">
                            <input ref="namaproduk" type="text" className="form-control" placeholder="Nama Produk" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputHarga" className="col-lg-2 control-label">Harga</label>
                            <div className="col-lg-10">
                                <input ref="hargaproduk" type="text" className="form-control" placeholder="Harga Produk" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-lg-6">
                            <Link to="/listproduk" type="reset" className="btn btn-default"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Cancel</Link>&nbsp;
                            <button type="button" onClick={() => this.kirimData(this.refs)} className="btn btn-primary"><span class="glyphicon glyphicon-send" aria-hidden="true"></span> Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>        
    )
  }
}

export default Form;