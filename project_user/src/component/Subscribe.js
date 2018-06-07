import React, { Component } from 'react';

class Subscribe extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="email-gather">
                    <div className="col-sm-12 col-md-12 text-center">
                        <h2>Subscribe Newsletter</h2>
                        <p>Stay updated for new collection &amp; special offer</p>
                        <form>
                            <input type="email" name="subscriber_email" placeholder="TYPE YOUR EMAIL" className="text-center" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Subscribe;
