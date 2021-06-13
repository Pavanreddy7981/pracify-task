import React from 'react'
import "./MiddleSection.css";
import image from "../assests/Group 134.png"
import Quotation from "../assests/Group 86.png";
import Female from "../assests/woman-in-brown-jacket-and-black-shirt-3484683.png";
import { Avatar } from '@material-ui/core';


const MiddleSection = () => {
    return (
        <div className="middleSection">
            <div className="middleSection__left">
                <img src={image}/>
            </div>
            <div className="middleSection__right">
                <div className="middleSection__rightTop">
                    <img className="quotation" src={Quotation}/>
                    <Avatar src={Female}/>
                    <h3>Jane Deo</h3>
                    <p>⭐⭐⭐⭐</p>
                    <h6>Thank you for all the amazing produce and products you deliver each week…
                    you make my life so easy an bring goodness into our family eating. 
                    I’ve been roasting a lot of brussel sprouts and</h6>
                </div>

                <div className="middleSection__rightBottom">
                    <div className="middleSection__rightBottomTop">
                        <p>Subscribe to Our Newsletter</p>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.</h5>
                    </div>
                    <div className="middleSection__rightBottomFooter">
                        <input placeholder="Enter Your Email Address"/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleSection
