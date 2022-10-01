import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';
import usicon from '../img/usicon.png';
import vietnamicon from '../img/vietnamicon.png';
import Cart1 from './cart1.js';
function Navbar() {

  return (
    <>
<div className='container7'>
      <div id="language">
        <a className='white' href="#"><i className=""></i> English</a >
        <img className="iconflag" src={usicon} alt="icon" />/
        <a className='white' href="#"><i className=""></i> Vietnamese</a>
        <img className="iconflag" src={vietnamicon} alt="icon" />

      </div>
    <div className="navbar">
        <a className="active" href="/"><i className="fa fa-fw fa-home"></i> Home</a>
        <input className='searchbar' type="text" placeholder="Search.." />
        <span class="input-group-btn">
          <button  className='searchbtn' type="submit"><i class="mdi mdi-file-find"></i> GO</button>
          <input type="hidden" name="post_type" value="product" />
         
        </span>

        
        <a href="/login"><i className="fa fa-fw fa-user"></i> Login</a>     
        <a href="/products"><i className="fa fa-camera"></i> Products</a>
        <a href="/about"><i className="fa fa-fw fa-info"></i> About</a>
        <a href="/gallery"><i className="fa fa-fw fa-camera-retro"></i> Gallery</a>
        <Cart1 number="3"/> 

    </div>
</div>     
    </>
  );
}
export default Navbar;
