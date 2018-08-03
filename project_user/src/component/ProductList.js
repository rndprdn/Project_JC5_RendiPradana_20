import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideFilter from './SideFilter';

class ProductList extends Component {
  render() {
    return (
        <div className="content-product" style={{marginTop: "80px"}}>
            <div className="container">
                <div className="row">
                    <SideFilter />
                    <div className="col-sm-6 col-md-8 col-lg-9">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="product product-single">
                                    <div className="product-thumb">
                                        <img src="img/item-10.jpg" alt />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-price">$32.50</h3>
                                        <div className="product-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-o empty" />
                                            <i className="fa fa-star-o empty" />
                                        </div>
                                        <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                        <div className="product-btns">
                                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                        </div>
                                    </div>
                                </div>		
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="product product-single">
                                    <div className="product-thumb">
                                        <img src="img/item-02.jpg" alt />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-price">$32.50</h3>
                                        <div className="product-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-o empty" />
                                            <i className="fa fa-star-o empty" />
                                        </div>
                                        <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                        <div className="product-btns">
                                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                        </div>
                                    </div>
                                </div>		
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="product product-single">
                                <div className="product-thumb">
                                    <img src="img/item-03.jpg" alt />
                                </div>
                                <div className="product-body">
                                    <h3 className="product-price">$32.50</h3>
                                    <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                    <i className="fa fa-star-o empty" />
                                    </div>
                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                    <div className="product-btns">
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                    </div>
                                </div>
                                </div>		
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="product product-single">
                                <div className="product-thumb">
                                    <img src="img/item-04.jpg" alt />
                                </div>
                                <div className="product-body">
                                    <h3 className="product-price">$32.50</h3>
                                    <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                    <i className="fa fa-star-o empty" />
                                    </div>
                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                    <div className="product-btns">
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                    </div>
                                </div>
                                </div>		
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="product product-single">
                                <div className="product-thumb">
                                    <img src="img/item-07.jpg" alt />
                                </div>
                                <div className="product-body">
                                    <h3 className="product-price">$32.50</h3>
                                    <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                    <i className="fa fa-star-o empty" />
                                    </div>
                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                    <div className="product-btns">
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                    </div>
                                </div>
                                </div>		
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="product product-single">
                                <div className="product-thumb">
                                    <img src="img/item-15.jpg" alt />
                                </div>
                                <div className="product-body">
                                    <h3 className="product-price">$32.50</h3>
                                    <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                    <i className="fa fa-star-o empty" />
                                    </div>
                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                    <div className="product-btns">
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                    </div>
                                </div>
                                </div>		
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="product product-single">
                                <div className="product-thumb">
                                    <img src="img/item-13.jpg" alt />
                                </div>
                                <div className="product-body">
                                    <h3 className="product-price">$32.50</h3>
                                    <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                    <i className="fa fa-star-o empty" />
                                    </div>
                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                    <div className="product-btns">
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                    </div>
                                </div>
                                </div>		
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="product product-single">
                                <div className="product-thumb">
                                    <img src="img/item-16.jpg" alt />
                                </div>
                                <div className="product-body">
                                    <h3 className="product-price">$32.50</h3>
                                    <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                    <i className="fa fa-star-o empty" />
                                    </div>
                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                    <div className="product-btns">
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                    </div>
                                </div>
                                </div>		
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="product product-single">
                                <div className="product-thumb">
                                    <img src="img/item-17.jpg" alt />
                                </div>
                                <div className="product-body">
                                    <h3 className="product-price">$32.50</h3>
                                    <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                    <i className="fa fa-star-o empty" />
                                    </div>
                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                    <div className="product-btns">
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                    </div>
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

export default ProductList;
