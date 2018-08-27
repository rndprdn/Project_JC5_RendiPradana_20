import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'

import Cookies from 'universal-cookie';

import Sidebar from './Sidebar';
import Navbar from './Navbar';

const cookies = new Cookies();

export default class Dashboard extends Component {

  state = {
    data: [],
    user: []
  }

  componentWillMount(){
    axios.get('http://localhost:8000/jumlahdata')
    .then((ambilData) => {
      this.setState({
        data: ambilData.data
      })
    })
    axios.get('http://localhost:8000/jumlahuser')
    .then((ambilData) => {
      this.setState({
        user: ambilData.data
      })
    })
  }

  render() {

    if(cookies.get('userID') === undefined){
      return <Redirect to="/" />
    }

    const jumlahdata = this.state.data.map((item, index) => {
      var jumlah = item.jumlah;

      return <h3>{jumlah}</h3>
    })

    const jumlahuser = this.state.user.map((item, index) => {
      var jumlah = item.jumlah;

      return <h3>{jumlah}</h3>
    })

    return (
      <div className="wrapper"> 
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
        {/* Main content */}
          <section className="content">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-aqua">
                  <div className="inner">
                    {jumlahdata}
                    <p>New Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-yellow">
                  <div className="inner">
                    {jumlahuser}
                    <p>User Registrations</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
      </div>
    )
  }
}
