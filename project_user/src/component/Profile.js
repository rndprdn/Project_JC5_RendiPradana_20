import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="profile-page" style={{marginBottom: 100}}>
            <div className="container">
                <h1 className="page-header">Edit Profile</h1>
                <div className="row">
                {/* left column */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="text-center">
                    <img src="img/pp.jpg" className="avatar img-circle img-thumbnail" alt="avatar" />
                    <h6>Upload a different photo...</h6>
                    <input type="file" className="text-center center-block well well-sm" />
                    </div>
                </div>
                {/* edit form column */}
                <div className="col-md-8 col-sm-6 col-xs-12 personal-info">
                    <div className="alert alert-info alert-dismissable">
                    <a className="panel-close close" data-dismiss="alert">×</a> 
                    <i className="fa fa-bullhorn" />
                    Please complete <strong>your profile</strong>
                    </div>
                    <h3>Personal info</h3>
                    <form className="form-horizontal" role="form">
                    <div className="form-group">
                        <label className="col-lg-3 control-label">First name:</label>
                        <div className="col-lg-8">
                        <input className="form-control" placeholder type="text" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-3 control-label">Last name:</label>
                        <div className="col-lg-8">
                        <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-3 control-label">Email:</label>
                        <div className="col-lg-8">
                        <input className="form-control" type="email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-3 control-label">Time Zone:</label>
                        <div className="col-lg-8">
                        <div className="ui-select">
                            <select id="user_time_zone" className="form-control">
                            <option value="Hawaii">(GMT-10:00) Hawaii</option>
                            <option value="Alaska">(GMT-09:00) Alaska</option>
                            <option value="Pacific Time (US & Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                            <option value="Arizona">(GMT-07:00) Arizona</option>
                            <option value="Mountain Time (US & Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                            <option value="Central Time (US & Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                            <option value="Eastern Time (US & Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                            <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 control-label">Username:</label>
                        <div className="col-md-8">
                        <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 control-label">Password:</label>
                        <div className="col-md-8">
                        <input className="form-control" type="password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 control-label">Confirm password:</label>
                        <div className="col-md-8">
                        <input className="form-control" type="password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 control-label" />
                        <div className="col-md-8">
                        <input style={{marginRight: 10}} className="btn btn-primary" Value="Save Changes" type="button" />
                        <span />
                        <input className="btn btn-default" Value="Cancel" type="reset" />
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
        <div className="history-inv">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-default">
                    <div className="panel-heading">
                        History Invoice
                    </div>
                    {/* /.panel-heading */}
                    <div className="panel-body">
                        <div className="dataTable_wrapper">
                        <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                            <thead>
                            <tr>
                                <th>No</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="odd gradeX">
                                <td>1</td>
                                <td>INV0003</td>
                                <td>$25.00</td>
                                <td>1</td>
                            </tr>
                            <tr className="even gradeC">
                                <td>2</td>
                                <td>INV0009</td>
                                <td>$25.00</td>
                                <td>1</td>
                            </tr>   
                            </tbody>
                        </table>
                        </div>
                        {/* /.table-responsive */}
                    </div>
                    {/* /.panel-body */}
                    </div>
                    {/* /.panel */}
                </div>
                {/* /.col-lg-12 */}
                </div>
                {/* /.row */}
            </div>
        </div>
      </div>
    );
  }
}

export default Profile;
