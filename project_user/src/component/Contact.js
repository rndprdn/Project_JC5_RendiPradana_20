import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
  render() {
    return (
      <div className="container" style={{height: 250, marginTop: 50}}>
        <a href="https://api.whatsapp.com/send?phone=6281298494094&text=Assalamu%27alaykum%20Akhi,%20Ana%20ingin%20membeli%20produk%20antum" type="button" target="_blank" className="btn btn-info col-md-6 col-md-offset-3">WhatsApp</a>
      </div>
    )
  }
}
