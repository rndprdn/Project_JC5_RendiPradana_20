import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom';

class FormEdit extends Component {

    state = {
        idProduk: '',
        idCategory: '',
        namaProduk: '',
        hargaProduk: '',
        statusRedirect: false
    }

    componentDidMount(){
        var id = this.props.location.state.idproduk;
        axios.get('http://localhost:8000/editdata/'+ id)
        .then((ambilData) => {
            console.log(ambilData);
            this.setState({
                id: ambilData.data[0].id,
                idCategory: ambilData.data[0].category_id,
                namaProduk: ambilData.data[0].nama_produk,
                hargaProduk: ambilData.data[0].harga
            })
        })
    }

    updateData = (e) => {
        axios.post('http://localhost:8000/editdata/' ,{
            idProduk: e.idproduk.value,
            idCategory: e.idcategory.value,
            namaProduk: e.namaproduk.value,
            hargaProduk: e.hargaproduk.value
        });
    }

    redirect = () => {
        if(this.state.statusRedirect){
            <Redirect to="/listproduk" />
        }
    }

  render() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <form className="form-horizontal" encType="multipart/form-data">
                    <fieldset>
                        <legend>Edit Data</legend>
                        <div className="form-group">
                            <label className="col-lg-2 control-label">ID Produk</label>
                            <div className="col-lg-1">
                            <input ref="idproduk" type="text" className="form-control" defaultValue={this.state.id} disabled />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-2 control-label">ID Category</label>
                            <div className="col-lg-1">
                            <input ref="idcategory" type="text" className="form-control" defaultValue={this.state.idCategory} disabled />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-2 control-label">Nama Produk</label>
                            <div className="col-lg-10">
                            <input ref="namaproduk" type="text" className="form-control" defaultValue={this.state.namaProduk} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-2 control-label">Harga</label>
                            <div className="col-lg-10">
                                <input ref="hargaproduk" type="number" className="form-control" defaultValue={this.state.hargaProduk} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-2 control-label">Foto Produk</label>
                            <div className="col-lg-10">
                                <input ref="fotoproduk" type="file" className="form-control" defaultValue={this.state.hargaProduk} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-lg-6">
                            <Link to="/listproduk" type="reset" className="btn btn-default"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Cancel</Link>&nbsp;
                            <button onClick={() => this.updateData(this.refs)} type="button" className="btn btn-primary"><span class="glyphicon glyphicon-send" aria-hidden="true"></span> Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
  }
}

export default FormEdit;
