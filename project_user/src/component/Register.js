import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import axios from 'axios';

class Register extends Component {

  daftarUser = (e) => {
    axios.post('http://localhost:8000/createaccount', {
      namadepan: e.namadepan.value,
      namabelakang: e.namabelakang.value,
      username: e.username.value,
      email: e.email.value,
      password: e.password.value,
    })
    window.location.reload();
  }

  render() {
    return (
        <div className="container">
        <LoginModal />
          <div className="main">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <div className="registration-left">    
                  <h2 className="text-center"> Create An Account</h2>
                  <hr />
                  <form>
                    <div className="form-group">
                      <input ref="namadepan" type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                      <input ref="namabelakang" type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="form-group">
                      <input ref="username" type="text" className="form-control" placeholder="Username" toLowerCase />
                    </div>
                    <div className="form-group">
                      <input ref="email" type="email" className="form-control" placeholder="Email address" />
                    </div>
                    <div className="radio">
                      <label className="radio-inline">
                          <input ref="" type="radio" name="optradio" defaultChecked />Men
                      </label>
                      <label className="radio-inline">
                          <input ref="" type="radio" name="optradio" />Women
                      </label>
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <input ref="password" type="password" className="form-control" placeholder="Retype Password" />
                    </div>
                    <button className="btn btn-primary pull-right" type="button" onClick={() => this.daftarUser(this.refs)}>Create An Account</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Register;
