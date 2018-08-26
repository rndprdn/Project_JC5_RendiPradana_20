import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ProductList extends Component {

  state = {
    dataproduk: [],
    datacategory: [],
    idCategory: '',
    termurah: '',
    termahal: '',
    currentPage: 1,
    itemPerPage: 6,
    upperPageBound: 3,
    lowPageBound: 0,
    prevButton: 'disabled',
    pageBound: 3
  }

  // constructor(){
  //   super();
  //   this.handleClick() = this.handleClick.bind(this); 
  //   this.decrementClick() = this.decrementClick.bind(this); 
  //   this.incrementClick() = this.incrementClick.bind(this); 
  //   this.nextButtonClick() = this.nextButtonClick.bind(this); 
  //   this.prevButtonClick() = this.prevButtonClick.bind(this); 
  // }

  componentWillMount(){
    axios.get('http://localhost:8000/allproduk')
    .then((ambilData) => {
      this.setState({
        dataproduk: ambilData.data
      })
    })
  }

  componentDidMount(){
    axios.get('http://localhost:8000/categoryfilter')
    .then((ambilData) => {
      this.setState({
        datacategory: ambilData.data
      })
    })
  }

  // fungsi untuk mengambil id produk untuk di kirim ke backend dan di ambil data produknya untuk ditampilkan ke product detail
  ambilId = (e) => {
    // axios.post('http://localhost:8000/hargafilter' ,{
    //   idHarga: e
    // })
    console.log(e)
  }

  filterCategory = (e) => {
    axios.post('http://localhost:8000/produkfilter', {
      categoryId: e
    }).then((ambilData) => {
      this.setState({
        dataproduk: ambilData.data
      })
    })
  }

  render() {

    const category = this.state.datacategory.map((item, index) => {
      var idCategory = item.id;
      var category = item.category;

      return <li key={index} onClick={() => this.filterCategory(idCategory)}>{category}</li>
    })

    const produk = this.state.dataproduk.map((item, index) => {
      var idproduk = item.id;
      var namaproduk = item.nama_produk;
      var hargaproduk = item.harga;
      var fotoproduk = item.foto_produk;

      return <div key={index} className="col-sm-12 col-md-6 col-lg-4">
              <Link to={{ pathname:'/productDetails', state: {idproduk: idproduk}}} className="product-box">
              <div  className="product product-single">
                <div className="product-thumb">
                  <img src={'http://localhost:8000/tampunganGambar/' + fotoproduk} />
                </div>
                <div className="product-body">
                  <h3 className="product-price">Rp {hargaproduk}</h3>
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
      <div className="content-product" style={{marginTop: "80px"}}>
        <div className="container">
          <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="head-cat">
            <h3>Produk Kategori</h3>
            <hr />
          </div>
          <div className="category-filter">
            <ul>
              {category}
            </ul>
          </div>
          <div className="filter">
            <h3>Filter Harga</h3>
            <hr />
            <div class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> Filter <span class="caret"></span></button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                {/* <li onClick={() => this.termurah(this.defaultValue)} defaultValue="1"><a>Termahal</a></li> */}
                {/* <li onClick={() => termahal(value)} value="2"><a>Termurah</a></li> */}
              </ul>
            </div>
            <div className="col-search">
                <form>
                    <input className="input search-input" type="text" placeholder="Search Product..." />
                    <button className="search-btn"><i className="fa fa-search" /></button>
                </form>
            </div>
          </div>
        </div>
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
