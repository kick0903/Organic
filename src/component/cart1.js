import React, {useState} from "react";
import $ from 'jquery';
import './cart1.css';




const Cart1 = (props) => {
    const [count, setCount] = useState(1);


    return(
        <>
        <div className="cart">
              <i className="fa fa-shopping-cart"></i> Cart <span className="badge">{count}</span>

        </div>
        </>
    )
}
export default Cart1;
