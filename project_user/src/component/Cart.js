import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

class Cart extends Component {

  state = {
    produk: [],
    subPrice: [],
    detailCart: [],
    grandTotal: 0,
    iduser: cookies.get('userID'),
    chooseitem: ['Your Cart is Empty'],
    button: [],
    buttonIsiCart: []
  }

  componentWillMount(){
    var iduser = cookies.get('userID');
    axios.post('http://localhost:8000/datacart', {
      id: iduser
    }).then((ambilData) => {
      this.setState({
        produk: ambilData.data[0],
        subPrice: ambilData.data[1]
      })
      var Alltotal = 0;
      var listPrice = this.state.subPrice
      for (var i=0; i<listPrice.length; i++)
      {
          Alltotal = Alltotal + listPrice[i].subTotalPrice
      }
      
      this.setState({
          grandTotal: Alltotal
      })
    })
  }

  updateQty = (e, id) => {
    var userid = cookies.get('userID');
    axios.post('http://localhost:8000/updatecart', {
      newQty: e,
      cartID: id,
      userID: userid
    }).then((ambilData) => {
      this.setState({
        detailCart: ambilData.data[0],
        subPrice: ambilData.data[1]
      })
      var Alltotal = 0;
      var listPrice = this.state.subPrice
      for (var i=0; i<listPrice.length; i++)
      {
          Alltotal = Alltotal + listPrice[i].subTotalPrice
      }
      
      this.setState({
          grandTotal: Alltotal
      })
    })
  }

  deleteCart = (e) => {
    var userID = cookies.get('userID');
    axios.post('http://localhost:8000/deletecart', {
      iduser: userID,
      idcart: e
    }).then((ambilData) => {
      if(ambilData){
        axios.get('http://localhost:8000/datacart')
        .then((ambilData) => {
          this.setState({
            dataproduk: ambilData.data
          })
        })
      }
    })
    window.location.reload();
  }

  render() {

    if(cookies.get('userID') === undefined){
      return <Redirect to="/login" />
    }

    const produkCart = this.state.produk.map((item, index) => {
      var idcart = item.id;
      var namaproduk = item.nama_produk;
      var fotoproduk = item.foto_produk;
      var desk = item.desk;
      var harga = item.harga;
      var size = item.size;
      var qty = item.qty;

      return <div key={index} value={idcart}>
              <div className="row">
                <div className="col-xs-2"><img className="img-responsive" src={'http://localhost:8000/tampunganGambar/' + fotoproduk} /></div>
                <div className="col-xs-4">
                  <h4 className="product-name"><strong>{namaproduk}</strong></h4><h4><small>{desk}</small></h4><h4><small>Size: {size}</small></h4>
                </div>
                <div className="col-xs-6">
                  <div className="col-xs-6 text-right">
                    <h6><strong>Rp. {harga}<span className="text-muted"> x</span></strong></h6>
                  </div>
                  <div className="col-xs-2">
                    <input type="number" className="form-control input-sm" min={1} defaultValue={qty} onChange={(e) => this.updateQty(e.target.value, idcart)} />
                  </div>
                  <div className="col-xs-2">
                    <button type="button" className="btn btn-link btn-xs">
                      <span onClick={() => this.deleteCart(idcart)} className="glyphicon glyphicon-trash"> </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

    })

    const noitem = this.state.chooseitem.map((item, index) => {

      return <div key={index}>
      <div className="row">
        <div className="col-md-12" style={{textAlign: "center"}}>{item}</div>
      </div>
      <div className="col-md-6 col-md-offset-3">
        <Link to="/productlist" type="button" className="btn btn-success btn-block">Lanjut berbelanja</Link>
      </div>
    </div>

    })

    const cartLength = produkCart.length

    const button = this.state.button.map((item, index) => {
      <div></div>
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
                  {(cartLength === 0) ? noitem : produkCart}
                  {(cartLength === 0) ? button :  <div>
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
                                                
                  }
                </div>
                {(cartLength === 0) ? button :  <div className="panel-footer">
                                                  <div className="row text-center"> 
                                                    <div className="col-xs-8">
                                                      <h4 className="text-right">Total <strong>Rp. {this.state.grandTotal}</strong></h4>
                                                    </div>
                                                    <div className="col-xs-4">
                                                      <Link to="/checkout" type="button" className="btn btn-success btn-block">Checkout</Link>
                                                    </div>
                                                  </div>
                                                </div>
            
                }
              </div>
            </div>
          </div>
        </div>
      </div>      
    );
  }
}

export default Cart;
