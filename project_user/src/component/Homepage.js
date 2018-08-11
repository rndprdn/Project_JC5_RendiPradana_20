import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="container">
          <LoginModal />
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="item active">
                  <img src="img/banner-lombok.jpg" alt="Los Angeles" style={{width: '100%'}} />
                </div>
                <div className="item">
                  <img src="img/banner.jpg" alt="Chicago" style={{width: '100%'}} />
                </div>
                <div className="item">
                  <img src="img/banner03.jpg" alt="New york" style={{width: '100%'}} />
                </div>
              </div>
              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <a className="banner banner-1" href="#">
                  <img src="./img/banner10.jpg" />
                  <div className="banner-caption text-center">
                    <h2 className="white-color">NEW COLLECTION</h2>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-sm-6">
                <a className="banner banner-1" href="#">
                  <img src="./img/banner11.jpg" alt />
                  <div className="banner-caption text-center">
                    <h2 className="white-color">NEW COLLECTION</h2>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
                <a className="banner banner-1" href="#">
                  <img src="./img/banner12.jpg" alt />
                  <div className="banner-caption text-center">
                    <h2 className="white-color">NEW COLLECTION</h2>
                  </div>
                </a>
              </div>
            </div>
            <div className="product-latest">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-title">
                    <h2 className="title">Latest Products</h2>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <div className="product product-single">
                    <div className="product-thumb">
                      <img src="img/product01.jpg" alt />
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
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <div className="product product-single">
                    <div className="product-thumb">
                      <img src="img/product02.jpg" alt />
                    </div>
                    <div className="product-body">
                      <h3 className="product-price">$50.50</h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                      <div className="product-btns">
                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <div className="product product-single">
                    <div className="product-thumb">
                      <img src="img/product03.jpg" alt />
                    </div>
                    <div className="product-body">
                      <h3 className="product-price">$20.30</h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o empty" />
                      </div>
                      <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                      <div className="product-btns">
                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <div className="product product-single">
                    <div className="product-thumb">
                      <img src="img/product04.jpg" alt />
                    </div>
                    <div className="product-body">
                      <h3 className="product-price">$45.50</h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                      <div className="product-btns">
                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <div className="product product-single">
                    <div className="product-thumb">
                      <img src="img/product05.jpg" alt />
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
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <div className="product product-single">
                    <div className="product-thumb">
                      <img src="img/product06.jpg" alt />
                    </div>
                    <div className="product-body">
                      <h3 className="product-price">$50.50</h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                      <div className="product-btns">
                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <div className="product product-single">
                    <div className="product-thumb">
                      <img src="img/product07.jpg" alt />
                    </div>
                    <div className="product-body">
                      <h3 className="product-price">$20.30</h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o empty" />
                      </div>
                      <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                      <div className="product-btns">
                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <div className="product product-single">
                    <div className="product-thumb">
                      <img src="img/product08.jpg" alt />
                    </div>
                    <div className="product-body">
                      <h3 className="product-price">$45.50</h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
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

export default Homepage;
