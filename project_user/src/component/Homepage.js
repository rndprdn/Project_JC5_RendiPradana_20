import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

class Homepage extends Component {

  state = {
    bestproduk: []
  }

  componentWillMount(){
    axios.get('http://localhost:8000/bestproduct')
    .then((ambilData) => {
      var category1 = ambilData.data[0];
      var category2 = ambilData.data[1];
      var category3 = ambilData.data[2];
      var category4 = ambilData.data[3];
      var akhir = [...category1,...category2,...category3,...category4];
      this.setState({
        bestproduk: akhir
      })
    })
  }

  render() {

    const produk = this.state.bestproduk.map((item, index) => {
      var idproduk = item.id;
      var idcategory = item.category_id;
      var namaproduk = item.nama_produk;
      var hargaproduk = item.harga;
      var fotoproduk = item.foto_produk;

      return <div key={index} className="col-md-3 col-sm-6 col-xs-6">
              <Link to={{ pathname:'/productDetails', state: {idproduk: idproduk}}} className="product-box">
                <div className="product product-single">
                  <div className="product-thumb">
                    <img src={'http://localhost:8000/tampunganGambar/' + fotoproduk} />
                  </div>
                  <div className="product-body">
                    <h3 className="product-price">Rp. {hargaproduk}</h3>
                    <h2 className="product-name">{namaproduk}</h2>
                    <div className="product-btns">
                      <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
    })

    return (
      <div>
        <div className="content">
          <div className="container">
          <LoginModal />
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="item active">
                  <img src="img/banner-lombok.jpg" alt="Pray For Lombok" style={{width: '100%'}} />
                </div>
                <div className="item">
                  <img src="img/banner.jpg" alt="banner1" style={{width: '100%'}} />
                </div>
                <div className="item">
                  <img src="img/banner2.jpg" alt="banner2" style={{width: '100%'}} />
                </div>
              </div>
              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <Link className="banner banner-1" to="/productlist">
                  <img src="./img/koleksi1.jpg" alt="New Collection" />
                  <div className="banner-caption text-center">
                    <h2 style={{color: 'black'}}>NEW COLLECTION</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-6">
                <Link className="banner banner-1" to="/productlist">
                  <img src="./img/koleksi2.jpg" alt="New Collection" />
                  <div className="banner-caption text-center">
                    <h2>NEW COLLECTION</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
                <Link className="banner banner-1" to="/productlist">
                  <img src="./img/koleksi3.jpeg" alt="New Collection" />
                  <div className="banner-caption text-center">
                    <h2 style={{color: 'black'}}>NEW COLLECTION</h2>
                  </div>
                </Link>
              </div>
            </div>
            <div className="product-latest">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-title">
                    <h2 className="title">best Products</h2>
                  </div>
                </div>
                {produk}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
