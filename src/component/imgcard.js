import farm from "../img/farm.jpg";
import React from "react";
import { useState } from "react";
import "./imgcard.css";

const ImgCard = (props) => {
    const [switchToggle, setToggle] = useState(false);
        const ToggleClass = () => {
            switchToggle ? setToggle(false) : setToggle(true);}
    return(
        <>  
    <div className="gallery-body">
        <div className="gallerycard">
        <div className={switchToggle ? "imgdetailcbig" : " "}><img onClick={ToggleClass} className={switchToggle ? "imgdetailcbig2" : "imgcard"} src={props.img} alt="error"/></div>
            <h3 className="namecard">{props.name}</h3>
            <p className="desccard">{props.desc}</p>
        </div>
        
        
    </div>    
        </>
    )
}
export  default ImgCard;