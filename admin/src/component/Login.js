import React, { Component } from 'react';
// import axios from 'axios';
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

export default class Login extends Component {

    // state = {
    //     statusRedirect: false,
    //     statusLogin: ''
    // }

    // login = (e) => {
    //     var self = this
    //     axios.post('http://localhost:8000/login', {
    //         inputUsername: e.username.value,
    //         inputPassword: e.password.value
    //     }).then((ambilData) => {
    //         self.setState({
    //             hasilData: ambilData.data
    //         })

    //         if(ambilData.data === 'Oke'){
    //             self.setState({
    //                 statusRedirect: true
    //             })
    //         } else{
    //             self.setState({
    //                 statusLogin: 'Username/Password salah!'
    //             })
    //         }
    //     })
    // }

    // redirect = () => {  
    //     if(this.state.statusRedirect){
    //         // Fungsinya untuk mengirim tipe kasus di redux
    //         this.props.dispatch({
    //             type:'Login', 
    //             value: this.state.hasilData
    //         });

    //         return <Redirect to="/listproduk" />
    //     }
    // }

  render() {
    return (
        <div className="page-wrapper">
        {/* {this.redirect()} */}
            <div className="page-content--bge5" style={{paddingTop: 100}}>
                <div className="container">
                    <div className="login-wrap">
                        <div className="login-content">
                            <div className="login-logo">
                                <a href="#">
                                    <img src="images/icon/logo.png" alt="CoolAdmin" />
                                </a>
                            </div>
                            <div className="login-form">
                                <form action method="post">
                                    <div className="form-group">
                                        <input className="form-control" type="email" name="text" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="password" name="password" placeholder="Password" />
                                    </div>
                                    <button onClick={() => this.login(this.refs)} className="au-btn au-btn--block au-btn--green m-b-20" type="button">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

// function mapStateToProps(state){
//     return {
//       login: state.hasilLogin
//     }
//   }

// export default connect(mapStateToProps)(Login);
