import React from 'react'
import "./Presenters.css"
import FirstImage from "../assests/Group 39.png"
import SecondImage from "../assests/Group 64.png";
import ThirdImage from "../assests/Group 55.png"



const Presenters = () => {
    return (
        <div className="presenters">
            <p>Proudly presented by</p>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.</h5>

            <div className="presenters__images">
                <img src={FirstImage}/>
                <img src={SecondImage}/>
                <img src={ThirdImage}/>
                <img src={SecondImage}/>
                <img src={FirstImage}/>

            </div>
        </div>
    )
}

export default Presenters
