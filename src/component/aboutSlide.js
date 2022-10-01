import $ from 'jquery';
import farm1 from '../img/farm1.jpg';
import farm2 from '../img/farm2.jpg';
import farm3 from '../img/farm3.jpg';
import farm4 from '../img/farm4.jpg';
import stockvet from "../img/stockvet.jpg"
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css";
import '../pages/about.css';
import React, { Component } from "react";
import Slider from "react-slick";

export default class AboutSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    };
    return (
      <div>
        <h2> SOME OF OUR PRODUCTS</h2>
        <Slider {...settings}>
          <div>
          <img className="slideimg" src={farm3} alt="" />
          </div>
          <div>
          <img className="slideimg" src={farm4} alt="icon" />
          </div>
          <div>
          <img className="slideimg" src={stockvet} alt="icon" />
          </div>
          <div>
          <img className="slideimg" src={farm3} alt="icon" />
          </div>
          <div>
          <img className="slideimg" src={farm4} alt="icon" />
          </div>
          <div>
          <img className="slideimg" src={stockvet} alt="icon" />
          </div>
        </Slider>
      </div>
    );
  }
}
