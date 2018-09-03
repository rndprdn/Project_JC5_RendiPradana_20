import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Register extends Component {

  state = {
    redirect: false,
    gender: '',
    typePass: 'password',
    statusPass: '',
    statusUsername: '',
    mycookie: cookies.get('userID')
  }

  daftarUser = (e) => {
    axios.post('http://localhost:8000/createaccount', {
      namadepan: e.firstname.value,
      namabelakang: e.lastname.value,
      username: e.username.value,
      password: e.password.value,
      sex: e.sex.value,
      email: e.email.value,
      nohp: e.nohp.value,
      date: e.date.value,
      address: e.address.value
    }).then((Response) => {
      var status = Response.data;
      if(status === 1){
        this.setState({
          redirect: true
        })
      } else if(status === 0){
        this.setState({
          statusUsername: 'Username already taken',
        })
      }
    })
  }

  selectGender = (e) => {
    this.setState({
      gender: e.target.value
    })
    console.log(this.state.gender);
  }

  showPass = () => {
    if(document.getElementById("showpass").checked === true){
      this.setState({
        typePass: 'text'
      })
    } else if(document.getElementById("showpass").checked === false){
      this.setState({
        typePass: 'password'
      })
    }

  }

  checkPass = (e) => {
    var inputPass = document.getElementById("password").value;
    var confirmPassword = e.target.value;

    if(confirmPassword === inputPass){
      this.setState({
        statusPass: 'Password Match'
      })
    } else{
      this.setState({
        statusPass: 'Password Not Match'
      })
    }
  }

  render() {

    if(this.state.redirect) return <Redirect to="/login" />
    if(this.state.mycookie !== undefined) return <Redirect to="/" />

    return (
      <div className="container" style={{marginTop: 50, marginBottom: 80}}>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Register</h3>
              </div>
              <div className="panel-body">
                <form>
                  <fieldset>
                    <div className="row">
                      <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="form-group">
                          <input ref="firstname" type="text" className="form-control input-md" placeholder="First Name" autoFocus />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="form-group">
                          <input ref="lastname" type="text" className="form-control input-md" placeholder="Last Name" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input ref="username" className="form-control" placeholder="Username" type="text" />
                      <label>{this.state.statusUsername}</label>
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="form-group">
                          <input id="password" ref="password" type={this.state.typePass} className="form-control input-md" placeholder="Password" />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="form-group" style={{marginTop: 10}}>
                          <label>
                            <input id="showpass" type="checkbox" onChange={this.showPass} /> Show Password
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input onChange={this.checkPass} className="form-control" placeholder="Confirm Password" type="password" />
                      <label>{this.state.statusPass}</label>
                    </div>
                    <div className="form-group">
                      <select ref="sex" className="form-control">
                        <option selected disabled>-- Gender --</option>
                        <option value="Pria">Pria</option>
                        <option value="Wanita">Wanita</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input ref="email" className="form-control" placeholder="Email" type="email" />
                    </div>
                    <div className="form-group">
                      <input ref="nohp" className="form-control" placeholder="Phone Number" type="number" />
                    </div>
                    <div className="form-group">
                      <input ref="date" className="form-control" type="date" />
                    </div>
                    <div className="form-group">
                      <textarea ref="address" className="form-control" placeholder="Address" type="text" />
                    </div>
                    <button className="btn btn-lg btn-success btn-block" type="button" onClick={() => this.daftarUser(this.refs)}>Register</button>
                  </fieldset>
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
