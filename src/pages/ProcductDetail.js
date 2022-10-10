import React from "react";
import { useState } from "react";
import $ from 'jquery';
import "../pages/productdetail.css";
import CardSlideO from "../component/cardo";
import img1 from "../img/dau-phong-organic-ep-lanh-ansen-foodbox.jpg";
import img2 from "../img/gung.jpg";
import img3 from "../img/mangkho.jpg";
import img4 from "../img/skullcap.jpeg";
import img5 from "../img/khoai-tay-organic-foodbox-2-scaled.jpg"
import Slider from "react-slick";

const ProductDetail = () => {
    $(function () {
        $(".tabbtn").on("click", function (e) {
            e.preventDefault();
            $(".tabbtn").addClass("active");
            $(".tabbtn1").removeClass("active")
            $(".tab1").removeClass("hidetab")
            $(".tab2").addClass("hidetab")
        });
        $(".tabbtn1").on("click", function (e) {
            e.preventDefault();
            $(".tabbtn1").addClass("active");
            $(".tabbtn").removeClass("active")
            $(".tab2").removeClass("hidetab");
            $(".tab1").addClass("hidetab")
        });
    });
    const [switchToggle, setToggle] = useState(false);
    const ToggleClass = () => {
        switchToggle ? setToggle(false) : setToggle(true);
    }
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
        <>
            <div className="breadbox">
                <a href="/">Home</a>/<a href="/">Product</a>/<text>Organic ginger</text>
            </div>
            <div className="container pdtailb">
                <div className="row">
                    <div className={switchToggle ? "imgdetailcbig" : "col-md-6"}>
                        <a><img onClick={ToggleClass} className={switchToggle ? "imgdetailcbig1" : "imgdetailc"} src={img2} alt="product img" /></a>
                    </div>

                    <div className={switchToggle ? "hidetab" : "col-md-6 pdetailc"}>
                        <h1 className="headtext">Organic ginger</h1>
                        <h2 className="pdtailprice">40.000 VND</h2>
                        <span className="checkt1">In stock</span> <br />
                        <button className="pdtbutton">
                            <input className="pdtinp" min="0" type="number"></input>
                            <i className="fa fa-shopping-cart pdticon"></i>
                            Add to cart
                        </button> <br />
                        <button className="tabbtn active showtab">Product Description</button>
                        <button className="tabbtn1 ">Delivery policy</button>
                        <div className="tab1">
                            Origin: farm in Pleiku City - Gia Lai province <br />
                            Farming method: Organic/organic direction<br />
                            Packing: 500 gr
                        </div>
                        <div className="tab2 hidetab">
                            Deliver in 2 hours:<br />
                            Standard packing<br />
                            Guaranteed quality
                        </div><br />
                        <text>Category:Organic Vegetable</text><br /><br />
                        <text>Why choose Star Organic Farm?</text>
                        <div className="containerdetail">
                            <div className="row detailtxtsize">
                                <div className="col-md-6">
                                    <div className="truckicon"><i class="fas fa-truck"></i></div>
                                    <div className="textbox1"><text className="bluetext">Super fast Delivery</text><br />
                                        <text>At your home in 2 hours</text></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="truckicon"><i class="fa-solid fa-basket-shopping"></i></div>
                                    <div className="textbox1"><text className="bluetext">Guaranteed quality</text><br />
                                        <text>Harvest from organic farm.</text></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={switchToggle ? "hidetab" : "sameproduct"}>
                <text className="sametext1">Similar Products</text>
                <Slider {...settings}>
                    <CardSlideO img={img1} cardtitle="Organic Ansen cold pressed peanut oil" price="26.000 VND" />
                    <CardSlideO img={img5} cardtitle="Organic ginger" price="10.000 VND" />
                    <CardSlideO img={img3} cardtitle="Dried bamboo shoots" price="30.000 VND" />
                    <CardSlideO img={img4} cardtitle="Dried skullcap" price="20.000 VND" />
                    </Slider>
            </div>
        </>
    )
}
export default ProductDetail;