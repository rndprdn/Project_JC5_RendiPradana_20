import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Login extends Component {

  state = {
    status: false,
    typePass: 'password'
  }

  login = (e) => {
    axios.post('http://localhost:8000/loginuser', {
      username: e.username.value,
      password: e.password.value
    }).then((Response) => {
      var userId = Response.data;
      cookies.set('userID', userId, {path: '/'});
      this.setState({
        status: true
      })
    })
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

  render() {

    if(this.state.status === true){
      return <Redirect to="/" />
    }

    return (
        <div className="container" style={{marginTop: 50, marginBottom: 80}}>
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        <h3 className="panel-title">Please sign in</h3>
                        </div>
                        <div className="panel-body">
                        <form acceptCharset="UTF-8" role="form">
                            <fieldset>
                            <div className="form-group">
                              <input ref="username" className="form-control" placeholder="Username" type="text" autoFocus />
                            </div>
                            <div className="form-group">
                              <input ref="password" className="form-control" placeholder="Password" type={this.state.typePass} />
                            </div>
                            <div className="checkbox">
                              <label>
                                <input id="showpass" type="checkbox" onChange={this.showPass} /> Show Password 
                              </label>
                            </div>
                            <button className="btn btn-lg btn-success btn-block" type="button" onClick={() => this.login(this.refs)}>Login</button>
                            </fieldset>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Login;