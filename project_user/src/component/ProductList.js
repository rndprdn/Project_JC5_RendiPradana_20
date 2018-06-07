import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    return (
        <div>
            <div className="content-product">
                {/* banner */}
                <div className="banner-product">
                    <h2>WOMEN</h2>
                </div>
                {/* banner */}
                {/* product filters */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="head-cat">
                        <h3>Categories</h3>
                        </div>
                        <div className="cat-fil">
                        <ul>
                            <li><a href>All</a></li>
                            <li className="active"><a href>Women</a></li>
                            <li><a href>Men</a></li>
                        </ul>
                        </div>
                        <div className="filter">
                        <h3>Filter</h3>
                        <hr />
                        <div className="price-fil">
                            <div className="price">Price</div>
                        </div>
                        <hr />
                        <div className="color-fil">
                            <div className="color">Color</div>
                            <ul className="color-option">
                            <li><a href="#" style={{backgroundColor: '#475984'}} /></li>
                            <li><a href="#" style={{backgroundColor: '#8A2454'}} /></li>
                            <li><a href="#" style={{backgroundColor: '#BF6989'}} /></li>
                            <li><a href="#" style={{backgroundColor: '#9A54D8'}} /></li>
                            <li><a href="#" style={{backgroundColor: '#675F52'}} /></li>
                            <li><a href="#" style={{backgroundColor: '#050505'}} /></li>
                            <li><a href="#" style={{backgroundColor: '#D5B47B'}} /></li>
                            </ul>
                        </div>
                        {/* search */}
                        <div className="col-search">
                            <form>
                            <input className="input search-input" type="text" placeholder="Search Product..." />
                            <button className="search-btn"><i className="fa fa-search" /></button>
                            </form>
                        </div>
                        {/* search */}
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-8 col-lg-9">
                        <div className="sorting-item">
                        </div>
                        <div className="sorting-price">
                        </div>
                        {/* row */}
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
                        {/* row */}
                    </div>
                    </div>
                    {/* row */}
                </div>
                {/* product filters */}
            </div>
        </div>
    );
  }
}

export default ProductList;
