import "../home.css"
import React, {useState} from "react";
import $ from 'jquery';
import check from "../img/check.png";
import {FaCartPlus} from "react-icons/fa";
import defaultProps from "react-slick/lib/default-props";
const CardSlideO = (props) => {
    const [count, setCount] = useState(1);
    const increaseCount = () => {
        setCount(count + 1);
    };
    
    const decreaseCount = () => {
        if (count > 1){
            setCount(count - 1);
        }
  };
   const addtoCart = () =>{
        var cart = document.getElementsByClassName("badge");
        cart.setCount(count+1)
   }
    return(
        <div>
                <a href="/productdetail"><img className="boxpic" src={props.img} alt="" /></a>
                <h2>{props.cardtitle}</h2> <br />
                <span className="checkt"> <img src={check} className="checki" />  In stock - 0.25 kg </span> 
                <b>{props.price}</b>
                <div className="inputform">
                <button onClick={() => setCount(Math.max(count - 1, 1))} className="minusb">-</button>
                <input type="text" className="quatity" value={count} min="0" />
                <button onClick={() => setCount(count + 1)} className="minusb">+</button>
                </div>
                <button onClick={addtoCart} className="cartbtn"> <FaCartPlus /> Add to cart</button>
        </div>
    )
}
export default CardSlideO;