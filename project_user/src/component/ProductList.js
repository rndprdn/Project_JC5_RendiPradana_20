import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideFilter from './SideFilter';
import axios from 'axios';

class ProductList extends Component {

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

  render() {

    const produk = this.state.dataproduk.map((item, index) => {
      var idproduk = item.id;
      var idcategory = item.category_id;
      var namaproduk = item.nama_produk;
      var hargaproduk = item.harga;
      var fotoproduk = item.foto_produk;

      return <div key={index} className="col-sm-12 col-md-6 col-lg-4">
              <div className="product product-single">
                <div className="product-thumb">
                  <img src={'http://localhost:8000/tampunganGambar/' + fotoproduk} />
                </div>
                <div className="product-body">
                  <h3 className="product-price">Rp {hargaproduk}</h3>
                  <h2 className="product-name"><a href="#">{namaproduk}</a></h2>
                  <div className="product-btns">
                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                  </div>
                </div>
              </div>		
            </div>
    })

    return (
      <div className="content-product" style={{marginTop: "80px"}}>
        <div className="container">
          <div className="row">
            <SideFilter />
            <div className="col-sm-6 col-md-8 col-lg-9">
              <div className="row">
                {produk}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
