import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class admLogin extends Component {
  render() {
    return (
        <div className="container" style={{marginTop: 150}}>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="login-panel panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Please Sign In</h3>
                </div>
                <div className="panel-body">
                  <form role="form">
                    <fieldset>
                      <div className="form-group">
                        <input className="form-control" placeholder="E-mail" name="email" type="email" autofocus />
                      </div>
                      <div className="form-group">
                        <input className="form-control" placeholder="Password" name="password" type="password" />
                      </div>
                      <div className="checkbox">
                        <label>
                          <input name="remember" type="checkbox" defaultValue="Remember Me" />Remember Me
                        </label>
                      </div>
                      {/* Change this to a button or input when using this as a form */}
                      <Link to="/admIndex" className="btn btn-lg btn-success btn-block">Login</Link>
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

export default admLogin;