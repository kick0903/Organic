import $ from 'jquery';
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react';
import ReactDOM from 'react-dom';
import farmhouse from '../img/farmhouse.jpg';
import './about.css';
import farm from '../img/farm.jpg'
import AboutSlider from '../component/aboutSlide';



function About(){

return(
    <>
    <div className="breadbox">
            <a href="/">Home</a>/<text>About</text>
    </div>

    <div className=''>
             <div className="about-section">
                 <div className='txtsection'>
                     <h1>WELCOME TO THE START FARM!!!</h1>
                     <h1>WE SELL ONLY OGARNIC PRODUCTS</h1>
                    <h1>HERE IS SOMETHING ABOUT US</h1>
                 </div>
            </div>

        <div className='container2'>

            <h1 className='header'>
                
            </h1>
           <a href=""><img className="img" src={farmhouse} alt="" /></a> <br></br>
            <h5 className='textabt'>
            A farm is an area of land where livestock (animals) are raised and crops
            (plants) are grown for use as food, fiber, and fuel. The people who own and work on the farm 
            are called farmers.
            A farm usually has buildings where equipment such as
             tractors and supplies are stored. Some farms also have 
             buildings where livestock are housed. These buildings 
             usually have different names depending on the type of 
             livestock that lives there. For example, chickens live 
             in poultry houses and pigs live in swine parlors—sounds 
             fancy, doesn’t it?! 

            Farms are busy places. A day on the farm usually starts before the sun rises and ends
            after the sun has set. Farmers do not work alone. They have help from their families
            and other workers. Farmers do not take many vacations because there is always work  that needs to be done. <br></br> 
            </h5>
            <a href=""><img className="img" src={farm} alt="" /></a>
            <h1 className='textabt'>
            Benefits of working as a farmer <br></br>
            Working as a farmer has many potential benefits, including:
            </h1>
            <h5 className='textabt'>
            Ability to work outside: Farmers spend most of their workday outside. They often wake early to feed animals, inspect crops and perform other agricultural duties. Farming can be a great profession for people who enjoy being outside.
            Increased activity: Farming requires a lot of physical exercise and activity. This can be a great role for professionals who enjoy staying active.
            Improved well-being: Being outside and performing physical activity could help improve your well-being.
            High job satisfaction: Farmers perform essential work by creating food and food products for people. Some professionals feel more satisfied when they know they are doing important tasks.
            More independence: Many farmers operate their own farms. They can schedule their days, hire employees and make important decisions.
            </h5>
    </div>
    <AboutSlider/>
    </div>
    
    

    
    </>
)
}
export default About ;
