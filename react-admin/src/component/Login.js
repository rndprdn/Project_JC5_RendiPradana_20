import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends Component {

    state = {
        statusRedirect: false,
        statusLogin: ''
    }

    login = (e) => {
        var self = this
        axios.post('http://localhost:8000/login', {
            inputUsername: e.username.value,
            inputPassword: e.password.value
        }).then((ambilData) => {
            self.setState({
                hasilData: ambilData.data
            })

            if(ambilData.data === 'Oke'){
                self.setState({
                    statusRedirect: true
                })
            } else{
                self.setState({
                    statusLogin: 'Username/Password salah!'
                })
            }
        })
    }

    redirect = () => {  
        if(this.state.statusRedirect){
            // Fungsinya untuk mengirim tipe kasus di redux
            this.props.dispatch({
                type:'Login', 
                value: this.state.hasilData
            });

            return <Redirect to="/listproduk" />
        }
    }

  render() {

    console.log(this.state.statusLogin);
    console.log(this.state.statusRedirect);
    console.log(this.props.login);

    return (
        <div className="container" style={{marginTop: 150}}>
        {this.redirect()}
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="login-panel panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Please Sign In</h3>
                </div>
                <div className="panel-body">
                  <form>
                    <fieldset>
                      <div className="form-group">
                        <input className="form-control" placeholder="Username" ref="username" type="text" required />
                      </div>
                      <div className="form-group">
                        <input className="form-control" placeholder="Password" ref="password" type="password" required />
                      </div>
                      <div className="checkbox">
                        <label>
                          <input ref="remember" type="checkbox" defaultValue="Remember Me" />Remember Me
                        </label>
                      </div>
                      <button type="button" onClick={() => this.login(this.refs)} className="btn btn-lg btn-success btn-block">Login</button>
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

function mapStateToProps(state){
    return {
      login: state.hasilLogin
    }
  }

export default connect(mapStateToProps)(Login);