import React from 'react';
import "./Footer.css";
import facebook from "../assests/Group 99.png";
import linkedin from "../assests/Group 100.png";
import instagram from "../assests/Group 105.png";
import organic from "../assests/Group 225.png";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__organic">
                <img src={organic}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor </p>

                <h5>© Copyright 2020 Nature</h5>
            </div>
            <div className="footer__information">
               <h4>Information</h4>
               
               <div className="footer__informationInfo">
               <p>About Us</p>
               <p>Products</p>
               <p>Contact Us</p>
               <p>Terms of service</p>
               </div>
            </div>
            <div className="footer__about">
               <p>About us</p>
               <p>Products</p>

            </div>
            <div className="footer__follow">
               <h4>Follow Us</h4>
               <div className="footer__followImages">
                    <img src={facebook}/>
                    <img src={linkedin}/>
                    <img src={instagram}/>


               </div>
            </div>
        </div>
    )
}

export default Footer
