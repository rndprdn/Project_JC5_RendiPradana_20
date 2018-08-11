import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class LoginModal extends Component {

  state = {
    status: false
  }

  pindah = () => {
    this.setState({
      redirect: true
    })
    window.location.reload();
  }

  login = (e) => {
    axios.post('http://localhost:8000/loginuser', {
      username: e.username.value,
      password: e.password.value
    }).then((Response) => {
      var data = Response.data;
      if(data === '1'){
        this.setState({
          status: true
        })
      }
    })
  }

  render() {

    if(this.state.status){
      return <Redirect to="/" />
    }

    return (
      <div className="container">
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">Silahkan Login</h4>
              </div>
              <div className="modal-body">
                <div className="panel-body">
                  <form role="form">
                    <fieldset>
                      <div className="form-group">
                          <input ref="username" className="form-control" placeholder="Username" type="text" autoFocus />
                      </div>
                      <div className="form-group">
                          <input ref="password" className="form-control" placeholder="Password" type="password" />
                      </div>
                      <div className="checkbox">
                          <label>
                            <input name="remember" type="checkbox" defaultValue="Remember Me" /> Remember Me
                          </label>
                      </div>
                      <button className="btn btn-lg btn-success btn-block" type="button" onClick={() => this.login(this.refs)}>Login</button>
                    </fieldset>
                  </form>
                  <div style={{marginTop: "10px"}}>
                    <p>Belum punya akun? <span><Link to="" onClick={this.pindah}>Daftar</Link></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginModal;