import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div>
        <center>
            {/* footer copyright */}
            <div className="footer-copyright">
                Copyright ©  All Rights Reserved <i className="fa fa-heart-o" aria-hidden="true" /> by <Link to="https://www.facebook.com/Skate473" target="_blank">Rendi Pradana</Link>
            </div>
            {/* /footer copyright */}
        </center>
      </div>
    );
  }
}

export default Footer;
