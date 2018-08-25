import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Link, Redirect } from 'react-router-dom';

const cookies = new Cookies();

class ProductDetails extends Component {

  state = {
    produk: [],
    status: 1
  }

  componentDidMount(){
    var id = this.props.location.state.idproduk;
    axios.post('http://localhost:8000/productdetail', {
      idproduk: id
    }).then((ambilData) => {
      this.setState({
        produk: ambilData.data,
      })
    })
  }

  toCart = (e) => {
    if(cookies.get('userID') !== undefined){
      var userid = cookies.get('userID');
      axios.post('http://localhost:8000/cart',{
        idproduk: e,
        userID: userid
      })
    } else if(cookies.get('userID') === undefined){
      this.setState({
        status: 0
      })
    }
    window.location.reload();
  }

  render() {

  const produk = this.state.produk.map((item, index) => {
    var idproduk = item.id;
    var categoryid = item.category_id;
    var namaproduk = item.nama_produk;
    var hargaproduk = item.harga;
    var qty = item.qty;
    var size = item.size;
    var desk = item.deskripsi;
    var fotoproduk = item.foto_produk;

    return  <div key={index} className="product-details">
              <div className="row">
                <aside className="col-sm-5 border-right">
                  <article className="gallery-wrap"> 
                    <div className="img-big-wrap">
                      <div><a href="#"><img src={'http://localhost:8000/tampunganGambar/' + fotoproduk}/></a></div>
                    </div>
                  </article>
                </aside>
                <aside className="col-sm-7">
                  <article className="product-body p-5">
                    <h3 className="title mb-3">{namaproduk}</h3>
                    <p className="price-detail-wrap"> 
                        <span className="price h3 text-warning"> 
                        <span className="currency">Rp. </span><span className="num">{hargaproduk}</span>
                        </span>  
                    </p>
                    <dl className="item-property">
                        <dt>Description:</dt>
                        <dd>
                        <p>{desk}</p>
                        </dd>
                    </dl>
                    <hr />
                    <div className="row">
                      <div className="col-sm-2">
                        <dl className="param param-inline">
                          <dt>Stock: </dt>
                          <dd>
                            <input type="number" className="form-control" placeholder={qty} disabled />
                          </dd>
                        </dl>
                      </div>
                      <div className="col-sm-7">
                        <dl className="param param-inline">
                          <dt>Size: </dt>
                          <dd>
                            {size}
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <hr />
                    <a href="#" className="btn btn-md btn-success"><span class="glyphicon glyphicon-usd" aria-hidden="true"></span> Buy now </a>&nbsp;
                    <button onClick={() => this.toCart(idproduk)} className="btn btn-md btn-danger"><Link to="/cart"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Add to cart  </Link></button>
                  </article>
                </aside>
              </div>
            </div>
    })

    if(this.state.status === 0){
      return <Redirect to="/login" />
    }

    return (
      <div className="container">            
        {produk}  
      </div>
    );
  }
}

export default ProductDetails;
