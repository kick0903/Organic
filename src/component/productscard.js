import React from "react";
import { useState } from "react";
import check from "../img/check.png";
import {FaCartPlus} from "react-icons/fa";
import "../component/productscard.css"
const ProductsCard = (props) => {
    const [count, setCount] = useState(1);
    const increaseCount = () => {
        setCount(count + 1);
    };
    
    const decreaseCount = () => {
        if (count > 1){
            setCount(count - 1);
        }
      
  };
    return(
        
        <div className="container1">
                <a href="/productdetail"><img className="boxpic1" src={props.img} alt="" /></a>
                <h2>{props.cardtitle}</h2>
                <span className="checkt"> <img src={check} className="checki1" />  In stock - 0.25 kg </span> 
                <b>{props.price}</b>
                <div className="inputform1">
                <button onClick={() => setCount(Math.max(count - 1, 1))} className="minusb">-</button>
                <input type="text" className="quatity" value={count} min="0" />
                <button onClick={() => setCount(count + 1)} className="minusb">+</button>
                </div>
                <button className="cartbtn1"> <FaCartPlus /></button>
        </div>
    );
}
export default ProductsCard;