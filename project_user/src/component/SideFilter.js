import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class SideFilter extends Component {

  state = {
    dataCategory: []
  }

  componentDidMount(){
    axios.get('http://localhost:8000/formproduk')
    .then((ambilData) => {
      this.setState({
        dataCategory: ambilData.data[0]
      })
    })
  }

  render() {

    const category = this.state.dataCategory.map((item, index) => {
      var idCategory = item.id;
      var category = item.category;

      return <li><button onClick={() => this.filter(idCategory)}>{category}</button></li>
    })

    return (
      <div>
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
            {/* <div className="col-md-12" style={{marginLeft: "-12px"}}>
                <div className="row">
                    <div className="col-md-6">
                        <labe>Minimum</labe>
                        <div className="input-group">
                            <span class="input-group-addon" id="basic-addon1">Rp</span>
                            <input type="text" class="form-control" id="amount-min" value="0"></input>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <labe>Maximum</labe>
                        <div className="input-group">
                            <span class="input-group-addon" id="basic-addon1">Rp</span>
                            <input type="text" class="form-control" id="amount-max" value="150000"></input>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="col-search">
                <form>
                    <input className="input search-input" type="text" placeholder="Search Product..." />
                    <button className="search-btn"><i className="fa fa-search" /></button>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SideFilter;
