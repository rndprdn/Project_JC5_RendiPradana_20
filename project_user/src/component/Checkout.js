import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

var cookies = new Cookies();

class Checkout extends Component {

  state = {
    cart: [],
    subtotal: [],
    payment: [],
    delivery: [],
    grandTotal: 0,
    shipping: 10000,
    redirect: false
  }

  componentDidMount(){
    var iduser = cookies.get('userID');
    axios.post('http://localhost:8000/cartCO', {
      iduser: iduser
    }).then((ambilData) => {
      this.setState({
        cart: ambilData.data[0],
        subtotal: ambilData.data[1],
        payment: ambilData.data[2],
        delivery: ambilData.data[3]
      })
      var Alltotal = 0;
      var listPrice = this.state.subtotal
      for (var i=0; i<listPrice.length; i++)
      {
          Alltotal = Alltotal + listPrice[i].subTotalPrice
      }
      
      this.setState({
          grandTotal: Alltotal
      })
    })
  }

  checkOut = (e) => {
    axios.post('http://localhost:8000/checkout', {
      namalengkap: e.fullname.value,
      alamat: e.address.value,
      kota: e.city.value,
      negara: e.state.value,
      kodepos: e.zipcode.value,
      nohp: e.phonenumber.value,
      email: e.email.value,
      payment: e.paymentmethod.value,
      delivery: e.deliverymethod.value,
      listcart: this.state.cart
    }).then((ambilData) => {
      if(ambilData.data === 1){
        this.setState({
          redirect: true
        })
      }
    })
  }


  render() {

    if(this.state.redirect) return <Redirect to="/invoice" />

    if(cookies.get('userID') === undefined){
      return <Redirect to="/login" />
    }

    const checkout = this.state.cart.map((item, index) => {
      var namaproduk = item.nama_produk;
      var harga = item.harga;
      var qty = item.qty;
      var fotoproduk = item.foto_produk;

      return <div>
              <div className="form-group">
                <div className="col-sm-3 col-xs-3">
                  <img className="img-responsive" src={'http://localhost:8000/tampunganGambar/' + fotoproduk} />
                </div>
                <div className="col-sm-6 col-xs-6">
                    <div className="col-xs-12">{namaproduk}</div>
                    <div className="col-xs-12"><small>Quantity: <span>{qty}</span></small></div>
                </div>
                <div className="col-sm-3 col-xs-3 text-right">
                    <h6><span>Rp. </span>{harga}</h6>
                </div>
              </div>
            </div>
    })

    const paymentMethod = this.state.payment.map((item, index) => {
      var bank = item.bank;

      return <option key={index} value={bank}>{bank}</option>
    })

    const deliveryMethod = this.state.delivery.map((item, index) => {
      var delivery = item.delivery;

      return <option key={index} value={delivery}>{delivery}</option>
    })

    return (
      <div className="container">
          <div className="checkout">
              <div className="row cart-head">  
              <div className="row cart-body">
                  <form className="form-horizontal">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-push-6 col-sm-push-6">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                            Review Order <div className="pull-right"><small><Link to="/cart" className="afix-1">Edit Cart</Link></small></div>
                        </div>
                        <div className="panel-body">
                          {checkout}
                          <div className="form-group"><hr /></div>
                          <div className="form-group">
                            <div className="col-xs-12">
                                <strong>Sub Total</strong>
                                <div className="pull-right"><span>Rp. </span><span>{this.state.grandTotal}</span></div>
                            </div>
                            <div className="col-xs-12">
                                <strong>Estimated Shipping</strong>
                                <div className="pull-right"><span>Rp. </span><span>{this.state.shipping}</span></div>
                            </div>
                          </div>
                          <div className="form-group"><hr /></div>
                          <div className="form-group">
                            <div className="col-xs-12">
                                <strong>Order Total</strong>
                                <div className="pull-right"><span>Rp. </span><span>{this.state.grandTotal + 10000}</span></div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
                    <div className="panel panel-default">
                      <div className="panel-heading">Address</div>
                        <div className="panel-body">
                          <div className="form-group">
                            <div className="col-md-12">
                                <h4>Shipping Address</h4>
                            </div>
                          </div>
                          <div className="form-group">
                          <div className="col-md-12 col-xs-12">
                              <strong>Fullname:</strong>
                              <input type="text" ref="fullname" className="form-control" required />
                          </div>
                          </div>
                          <div className="form-group">
                          <div className="col-md-12"><strong>Address:</strong></div>
                          <div className="col-md-12">
                              <input type="text" ref="address" className="form-control" required />
                          </div>
                          </div>
                          <div className="form-group">
                          <div className="col-md-12"><strong>City:</strong></div>
                          <div className="col-md-12">
                              <input type="text" ref="city" className="form-control" required />
                          </div>
                          </div>
                          <div className="form-group">
                          <div className="col-md-12"><strong>State:</strong></div>
                          <div className="col-md-12">
                              <input type="text" ref="state" className="form-control" required />
                          </div>
                          </div>
                          <div className="form-group">
                          <div className="col-md-12"><strong>Zip / Postal Code:</strong></div>
                          <div className="col-md-12">
                              <input type="number" ref="zipcode" className="form-control" required />
                          </div>
                          </div>
                          <div className="form-group">
                          <div className="col-md-12"><strong>Phone Number:</strong></div>
                          <div className="col-md-12"><input type="number" ref="phonenumber" className="form-control" required /></div>
                          </div>
                          <div className="form-group">
                          <div className="col-md-12"><strong>Email Address:</strong></div>
                          <div className="col-md-12"><input type="email" ref="email" className="form-control" required /></div>
                          </div>
                      </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">Payment Method</div>
                          <div className="panel-body">
                            <div className="form-group">
                              <div className="col-md-12"><strong>Payment by:</strong></div>
                              <div className="col-md-12">
                                <select ref="paymentmethod" className="form-control" required>
                                  <option selected disabled>-- Choose One --</option>
                                  {paymentMethod}
                                </select>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="col-md-12"><strong>Delivery by:</strong></div>
                              <div className="col-md-12">
                                <select ref="deliverymethod" className="form-control" required>
                                  <option selected disabled>-- Choose One --</option>
                                  {deliveryMethod}
                                </select>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <button onClick={() => this.checkOut(this.refs)} type="button" className="btn btn-primary btn-submit-fix">Place Order</button>
                              </div>
                            </div>
                        </div>
                      </div>
                      {/*CREDIT CART PAYMENT END*/}
                  </div>
                  </form>
              </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Checkout;
