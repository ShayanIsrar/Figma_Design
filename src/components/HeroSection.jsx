import React from "react";
import flipkart from '../assets/flipkart.png'
import amazon from '../assets/amazon.png'
import shoes from '../assets/shoe_image.png'

const HeroSection = () => {
  return (
    <div>
      <div className="hero">
        <div className="leftSide">
          <p className="heading">YOUR FEET DESERVE THE BEST</p>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className="buton">
            <button className="btnLeft">Shop Now</button>
            <button className="btnRight">Category</button>
          </div>
          <div className="someInfo">
            <p className="small">Also Available On</p>
            <div className="image">
            <img src={flipkart} alt="" className="imgLeft" />
            <img src={amazon} alt="" className="imgRight" />
            </div>
          </div>
        </div>
        <div className="rightSide">
            <img src={shoes} alt="" className="brand" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
