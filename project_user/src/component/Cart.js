import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

class Cart extends Component {

  state = {
    produk: []
  }

  componentWillMount(){
    var iduser = cookies.get('userID');
    axios.post('http://localhost:8000/datacart', {
      id: iduser
    }).then((ambilData) => {
      this.setState({
        produk: ambilData.data
      })
    })
  }

  render() {

    if(cookies.get('userID') === undefined){
      return <Redirect to="/login" />
    }

    const produkCart = this.state.produk.map((item, index) => {
      var namaproduk = item.nama_produk;
      var fotoproduk = item.foto_produk;
      var desk = item.deskripsi;
      var harga = item.harga;
      var size = item.size;

      return <div key={index} className="row">
              <div className="col-xs-2"><img className="img-responsive" src={'http://localhost:8000/tampunganGambar/' + fotoproduk} /></div>
              <div className="col-xs-4">
                <h4 className="product-name"><strong>{namaproduk}</strong></h4><h4><small>{desk}</small></h4>
              </div>
              <div className="col-xs-6">
                <div className="col-xs-6 text-right">
                  <h6><strong>Rp.{harga}<span className="text-muted"> x</span></strong></h6>
                </div>
                <div className="col-xs-2">
                  <input type="number" className="form-control input-sm" defaultValue={1} />
                </div>
                <div className="col-xs-2">
                  <button type="button" className="btn btn-link btn-xs">
                    <span className="glyphicon glyphicon-trash"> </span>
                  </button>
                </div>
              </div>
            </div>

    })

    return (
      <div className="container">
        <div className="shopping-cart">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="panel-title">
                    <div className="row">
                      <div className="col-xs-6">
                        <h5><span className="glyphicon glyphicon-shopping-cart" /> Shopping Cart</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-body">
                  {produkCart}
                  <hr />
                  <div className="row">
                    <div className="text-center">
                      <div className="col-xs-8">
                        <h6 className="text-right">Added items?</h6>
                      </div>
                      <div className="col-xs-4">
                        <Link to="/productlist" type="button" className="btn btn-info btn-sm btn-block">Update cart</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-footer">
                  <div className="row text-center">
                    <div className="col-xs-8">
                      <h4 className="text-right">Total <strong>$50.00</strong></h4>
                    </div>
                    <div className="col-xs-4">
                      <button type="button" className="btn btn-success btn-block">Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    );
  }
}

export default Cart;
