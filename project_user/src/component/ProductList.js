import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class ProductList extends Component {

  state = {
    dataproduk: [],
    datacategory: [],
    idCategory: '',
    termurah: 'termurah',
    termahal: 'termahal',
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

  filterCategory = (e) => {
    axios.post('http://localhost:8000/produkfilter', {
      categoryId: e
    }).then((ambilData) => {
      this.setState({
        dataproduk: ambilData.data
      })
    })
  }

  filterHarga = (e) => {
    var cek = e;
    console.log(e);
  }

  toCart = (e) => {
    if(cookies.get('userID') !== undefined){
      var userid = cookies.get('userID');
      axios.post('http://localhost:8000/cart',{
        idproduk: e,
        userID: userid
      }).then((ambilData) => {
        var data = ambilData.data;
        if(data === 1){
          this.setState({
            redirec: true
          })
        }
      })
    } else if(cookies.get('userID') === undefined){
      this.setState({
        status: 0
      })
    }
    window.location.reload();
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
                    <button onClick={() => this.toCart(idproduk)} className="btn btn-md btn-danger"><Link to="/cart" className="to-cart"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Add to cart  </Link></button>
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
            {/* <select className="form-control">
              <option selected disabled>-- Filter --</option>
              <option value={this.state.termurah} onClick={() => this.filterHarga(e)}>Termurah</option>
              <option value={this.state.termahal}>Termahal</option>
            </select> */}
            {/* <div className="col-search">
                <form>
                    <input className="input search-input" type="text" placeholder="Search Product..." />
                    <button className="search-btn"><i className="fa fa-search" /></button>
                </form>
            </div> */}
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
