import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginModal extends Component {
  render() {
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
                                <input className="form-control" placeholder="Username" name="username" type="text" autoFocus />
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Password" name="password" type="password" />
                            </div>
                            <div className="checkbox">
                                <label>
                                <input name="remember" type="checkbox" defaultValue="Remember Me" /> Remember Me
                                </label>
                            </div>
                            <input className="btn btn-lg btn-success btn-block" type="submit" defaultValue="Login" />
                            </fieldset>
                        </form>
                        <div style={{marginTop: "10px"}}>
                          <p>Belum punya akun? <span><Link to="/Register" type="submit">Daftar</Link></span></p>

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