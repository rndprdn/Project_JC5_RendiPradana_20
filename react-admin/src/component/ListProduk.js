import React, { Component } from 'react'
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import { connect } from 'react-redux';

function mapStateToProps(state){
  return {
    login: state.hasilLogin
  }
}

class ListProduk extends Component {

  // state digunakan apabila nilainya berubah akan merender ulang component
  // props adalah data yang dilempar dari parent ke child tapi tidak bisa melempar data dari child ke parent
  // redux adalah menjadikan sebuah variabel menjadi global yang di simpan ke dalam redux store yang bisa diakses oleh komponen manapun tanpa ada batasan(parent => child)  


  state = {
    dataproduk: []
  }

  componentDidMount(){
    axios.get('http://localhost:8000/')
    .then((ambilData) => {
      // console.log(ambilData.data);
      this.setState({
        dataproduk: ambilData.data
      })
    })
  }

  deleteData = (e) => {
    axios.post('http://localhost:8000/deletedata/', {
      idProduk: e
    })
  }

  render() {

    if(this.props.login != 'Oke'){
      return <Redirect to="/login" />
    }

    const hasil = this.state.dataproduk.map((item, index) => {
      var nomor = index + 1;
      var produkId = item.id;
      var categoryId = item.category_id;
      var namaProduk = item.nama_produk;
      var hargaProduk = item.harga;

      return <tr key={index}>
              <td>{nomor}</td>
              <td>{categoryId}</td>
              <td>{namaProduk}</td>
              <td>{hargaProduk}</td>
              <td style={{textAlign: 'left'}}>
                <span>
                  <Link to={{ pathname:'/editdata', state: {idproduk: produkId}}} className="btn btn-warning"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></Link>&nbsp;  
                  <button onClick={() => this.deleteData(produkId)} className="btn btn-danger"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>  
                </span>   
              </td>
            </tr>    
    });



    console.log(this.props.login);

    return (
      <div>
        <Navbar />
        <div className="container">
          <table className="table table-striped table-hover table-bordered ">
            <thead>
              <tr>
                <th style={{textAlign: 'center'}} className="col-md-1">No</th>
                <th style={{textAlign: 'center'}} className="col-md-1">Category ID</th>
                <th style={{textAlign: 'center'}} className="col-md-4">Nama Produk</th>
                <th style={{textAlign: 'center'}} className="col-md-2">Harga</th>
                <th style={{textAlign: 'center'}} className="col-md-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {hasil}
            </tbody>
          </table> 
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ListProduk);
