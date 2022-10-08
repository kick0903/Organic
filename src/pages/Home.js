
import React, {Component} from "react";
import $ from 'jquery';
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../home.css";
import icon1 from "../img/organic-icon.png";
import icon2 from "../img/foodbox-icon.png";
import icon3 from "../img/freshmeat.png";
import img1 from "../img/dau-phong-organic-ep-lanh-ansen-foodbox.jpg";
import img2 from "../img/gung-se-organic-foodbox.jpg";
import img3 from "../img/mangkho.jpg"
import img4 from "../img/skullcap.jpeg";
import img5 from "../img/combo1.jpeg";
import img6 from "../img/combo2.jpg"
import CardSlideO from "../component/cardo";

export default class Home extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
          <div className="contain">
            <div className="iconbox">
            <div className="iconcard">
            <a href="/products"><img className="icon" src={icon1} alt="icon" /></a>
            <h3>Organic</h3>
            <h3>61 Items</h3>
            </div>
            <div className="iconcard">
            <a href="/products"><img className="icon" src={icon2} alt="icon" /></a>
            <h3>Canned food</h3>
            <h3>24 Items</h3>
            </div>
            <div className="iconcard">
            <a href="/products"><img className="icon" src={icon3} alt="icon" /></a>
            <h3>Fresh meat</h3>
            <h3>8 Items</h3>
            </div>
            </div>
            <h1>Organic</h1>
          <Slider {...settings}>
            
            <CardSlideO img={img1} cardtitle="Organic Ansen cold pressed peanut oil" price="25.000 VND" />
            <CardSlideO img={img2} cardtitle="Organic ginger" price="10.000 VND" />
            <CardSlideO img={img1} cardtitle="Organic Ansen cold pressed peanut oil" price="25.000 VND" />
            <CardSlideO img={img2} cardtitle="Organic ginger" price="10.000 VND" />
            <CardSlideO img={img1} cardtitle="Organic Ansen cold pressed peanut oil" price="25.000 VND" />
            <CardSlideO img={img2} cardtitle="Organic ginger" price="10.000 VND" />
            <CardSlideO img={img1} cardtitle="Organic Ansen cold pressed peanut oil" price="25.000 VND" />
            <CardSlideO img={img2} cardtitle="Organic ginger" price="10.000 VND" />
            
            
          </Slider>
            <h1>Dry food</h1>
          <Slider {...settings}>
          <CardSlideO img={img3} cardtitle="Dried bamboo shoots" price="30.000 VND" />
          <CardSlideO img={img4} cardtitle="Dried skullcap" price="20.000 VND" />
          <CardSlideO img={img3} cardtitle="Dried bamboo shoots" price="30.000 VND" />
          <CardSlideO img={img4} cardtitle="Dried skullcap"price="20.000 VND" />
          <CardSlideO img={img3} cardtitle="Dried bamboo shoots" price="30.000 VND" />
          <CardSlideO img={img4} cardtitle="Dried skullcap" price="20.000 VND" />
          <CardSlideO img={img3} cardtitle="Dried bamboo shoots" price="30.000 VND" />
          <CardSlideO img={img4} cardtitle="Dried skullcap" price="20.000 VND" />
          </Slider>
          <h1>Combo box</h1>
          <Slider {...settings}>
          <CardSlideO img={img5} cardtitle="Combo size M" price="360.000 VND" />
          <CardSlideO img={img6} cardtitle="Combo size L" price="400.000 VND" />
          <CardSlideO img={img5} cardtitle="Combo size M" price="360.000 VND" />
          <CardSlideO img={img6} cardtitle="Combo size L" price="400.000 VND" />
          <CardSlideO img={img5} cardtitle="Combo size M" price="360.000 VND" />
          <CardSlideO img={img6} cardtitle="Combo size L" price="400.000 VND" />
          <CardSlideO img={img5} cardtitle="Combo size M" price="360.000 VND" />
          <CardSlideO img={img6} cardtitle="Combo size L" price="400.000 VND" />
          </Slider>
          </div>
          
      );
    }
  }