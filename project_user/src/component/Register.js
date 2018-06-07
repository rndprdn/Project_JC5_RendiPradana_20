import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
        <div>
            <div className="container">
                <div className="main">
                    {/* start registration */}
                    <div className="row">
                    <div className="col-sm-6">
                        <div className="registration-left">    
                        <h2 className="text-left">New User? <span> Create An Account</span></h2>
                        <hr />
                        <form>
                            <div className="form-group">
                            <input type="text" className="form-control" id="nama" placeholder="First Name" />
                            </div>
                            <div className="form-group">
                            <input type="text" className="form-control" id="email" placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                            <input type="email" className="form-control" id="telp" placeholder="Email Address" />
                            </div>
                            <div className="radio">
                            <label className="radio-inline">
                                <input type="radio" name="optradio" defaultChecked />Men
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="optradio" />Women
                            </label>
                            </div>
                            <div className="form-group">
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className="form-group">
                            <input type="password" className="form-control" id="password" placeholder="Retype Password" />
                            </div>
                            <button className="btn btn-primary" type="submit">Create An Account</button>
                        </form>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="registration-right">
                        <h2 className="text-left">Existing User</h2>
                        <hr />
                        <form>
                            <div className="form-group">
                            <input type="text" className="form-control" id="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                            <input type="email" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <button className="btn btn-primary" type="submit">Sign In</button>
                            <div className="forgot">
                            <a href>Forgot Your Password?</a>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Register;
