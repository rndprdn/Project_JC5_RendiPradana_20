import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
        <div>
            <div className="container">
                <div className="invoice">
                    <div className="row">
                    <div className="col-xs-12">
                        <div className="invoice-title">
                        <h2>Invoice</h2><h3 className="pull-right">Order # 12345</h3>
                        </div>
                        <hr />
                        <div className="row">
                        <div className="col-xs-6">
                            <address>
                            <strong>Billed To:</strong><br />
                            John Smith<br />
                            1234 Main<br />
                            Apt. 4B<br />
                            Springfield, ST 54321
                            </address>
                        </div>
                        <div className="col-xs-6 text-right">
                            <address>
                            <strong>Shipped To:</strong><br />
                            Jane Smith<br />
                            1234 Main<br />
                            Apt. 4B<br />
                            Springfield, ST 54321
                            </address>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-xs-6">
                            <address>
                            <strong>Payment Method:</strong><br />
                            Visa ending **** 4242<br />
                            jsmith@email.com
                            </address>
                        </div>
                        <div className="col-xs-6 text-right">
                            <address>
                            <strong>Order Date:</strong><br />
                            March 7, 2014<br /><br />
                            </address>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title"><strong>Order summary</strong></h3>
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                            <table className="table table-condensed">
                                <thead>
                                <tr>
                                    <td><strong>Item</strong></td>
                                    <td className="text-center"><strong>Price</strong></td>
                                    <td className="text-center"><strong>Quantity</strong></td>
                                    <td className="text-right"><strong>Totals</strong></td>
                                </tr>
                                </thead>
                                <tbody>
                                {/* foreach ($order->lineItems as $line) or some such thing here */}
                                <tr>
                                    <td>BS-200</td>
                                    <td className="text-center">$25.00</td>
                                    <td className="text-center">1</td>
                                    <td className="text-right">$25.00</td>
                                </tr>
                                <tr>
                                    <td>BS-400</td>
                                    <td className="text-center">$25.00</td>
                                    <td className="text-center">1</td>
                                    <td className="text-right">$25.00</td>
                                </tr>
                                <tr>
                                    <td className="thick-line" />
                                    <td className="thick-line" />
                                    <td className="thick-line text-center"><strong>Subtotal</strong></td>
                                    <td className="thick-line text-right">$50.00</td>
                                </tr>
                                <tr>
                                    <td className="no-line" />
                                    <td className="no-line" />
                                    <td className="no-line text-center"><strong>Shipping</strong></td>
                                    <td className="no-line text-right">$15</td>
                                </tr>
                                <tr>
                                    <td className="no-line" />
                                    <td className="no-line" />
                                    <td className="no-line text-center"><strong>Total</strong></td>
                                    <td className="no-line text-right">$75.00</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>    
        </div>
    );
  }
}

export default Homepage;
