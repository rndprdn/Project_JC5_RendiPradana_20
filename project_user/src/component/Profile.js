import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class LoginTest extends Component {

  state = {
    akun: []
  }

  componentDidMount(){
    var iduser = cookies.get('userID');
    axios.post('http://localhost:8000/profileuser', {
      userid: iduser
    }).then((ambilData) => {
      this.setState({
        akun: ambilData.data
      })
    })
    axios.get()
  }

  render() {

    const akun = this.state.akun.map((item, index) => {
      var firstname = item.nama_depan;
      var lastname = item.nama_belakang;
      var username = item.username;
      var nohp = item.nohp;
      var email = item.email;
      var alamat = item.alamat;

      return  <div key={index} className="tab-pane active" id="home">
                <hr />
                <form className="form">
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label><h4>First name</h4></label>
                      <input type="text" className="form-control" placeholder="first name" defaultValue={firstname} title="enter your first name if any." />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label><h4>Last name</h4></label>
                      <input type="text" className="form-control" placeholder="last name" defaultValue={lastname} title="enter your last name if any." />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label><h4>Username</h4></label>
                      <input type="text" className="form-control" defaultValue={username} disabled/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label><h4>Phone</h4></label>
                      <input type="text" className="form-control" placeholder="enter phone" defaultValue={nohp} title="enter your phone number if any." />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label><h4>Email</h4></label>
                      <input type="email" className="form-control" placeholder="you@email.com"  defaultValue={email} title="enter your email." />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label><h4>Location</h4></label>
                      <textarea type="email" className="form-control" placeholder="Location" defaultValue={alamat} title="enter a location" />
                    </div>
                  </div>
                </form>
                <hr />
              </div>
    })

    return (
      <div className="container bootstrap snippet">
        <div className="row">
          <div className="col-sm-3">
            <div className="text-center">
              <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" />
              <h6>Upload a different photo...</h6>
              <input type="file" className="text-center center-block file-upload" />
            </div><br />
            <div className="panel panel-default">
              <div className="panel-heading">Activity <i className="fa fa-dashboard fa-1x" /></div>
              <div className="panel-body">
                <div className=" text-right"><span className="pull-left"><strong>Order</strong></span> 125</div>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <ul className="nav nav-tabs">
              <li className="active"><a data-toggle="tab" href="#home">Profile</a></li>
              <li><a data-toggle="tab" href="#history">History Invoice</a></li>
            </ul>
            <div className="tab-content">
              {akun}
            </div>
          </div>
        </div>
      </div>
              
    )
  }
}
