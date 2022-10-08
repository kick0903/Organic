import React from "react";
import "../pages/products.css"
import ProductsCard from "../component/productscard";
import img1 from "../img/dau-phong-organic-ep-lanh-ansen-foodbox.jpg";
import img2 from "../img/gung-se-organic-foodbox.jpg";
import img3 from "../img/mangkho.jpg"
import img4 from "../img/skullcap.jpeg"
import { faSort } from "@fortawesome/free-solid-svg-icons";


const Products = () => {
    
    return(
        <div>
            <div className="breadbox">
            <a href="/">Home</a>/<text>Products</text>
            </div>
            <div className="container">
            <div className="row">
           <div className="col-md-3"> <ProductsCard img={img1} cardtitle="Organic peanut oil" price="26.000 VND" /></div>
           <div className="col-md-3"> <ProductsCard img={img2} cardtitle="Organic ginger" price="10.000 VND" /></div>
           <div className="col-md-3"> <ProductsCard img={img3} cardtitle="Dried bamboo shoots" price="30.000 VND" /></div>
           <div className="col-md-3"> <ProductsCard img={img4} cardtitle="Dried skullcap" price="20.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img1} cardtitle="Organic peanut oil" price="26.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img2} cardtitle="Organic ginger" price="10.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img3} cardtitle="Dried bamboo shoots" price="30.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img4} cardtitle="Dried skullcap" price="20.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img1} cardtitle="Organic peanut oil" price="26.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img2} cardtitle="Organic ginger" price="10.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img3} cardtitle="Dried bamboo shoots" price="30.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img4} cardtitle="Dried skullcap" price="20.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img1} cardtitle="Organic peanut oil" price="26.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img2} cardtitle="Organic ginger" price="10.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img3} cardtitle="Dried bamboo shoots" price="30.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img4} cardtitle="Dried skullcap" price="20.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img1} cardtitle="Organic peanut oil" price="26.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img2} cardtitle="Organic ginger" price="10.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img3} cardtitle="Dried bamboo shoots" price="30.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img4} cardtitle="Dried skullcap" price="20.000 VND" /></div>
           <div className="col-md-3"><ProductsCard img={img1} cardtitle="Organic peanut oil" price="26.000 VND" /></div>
           <div className="col-md-3"> <ProductsCard img={img2} cardtitle="Organic ginger" price="10.000 VND" /></div>
            <div className="col-md-3"> <ProductsCard img={img3} cardtitle="Dried bamboo shoots" price="30.000 VND" /></div>
            <div className="col-md-3"><ProductsCard img={img4} cardtitle="Dried skullcap" price="20.000 VND" /></div>
            </div>
            </div>
        </div>
    );
};
export default Products;