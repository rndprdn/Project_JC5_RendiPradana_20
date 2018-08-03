import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
        <div className="container">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Login;
