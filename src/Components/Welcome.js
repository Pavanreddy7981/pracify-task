import React from 'react'
import "./Welcome.css"
import image from "../assests/Group 114.png"
import food from "../assests/Group 207.png"
import foodFull from "../assests/Group 205.png"




const Welcome = () => {
    return (
        <div className="welcome">
            <div className="welcome__top">
                <img src={image}/>
                <p>Welcome to Nature</p>
                <h4>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. 
                 and scrambled it to make a type specimen book.</h4>
            </div>
            <div className="welcome__bottom">
                <img src={food}/>
                <img src={foodFull}/>
                <img src={food}/>
                <img src={food}/>

            </div>
        </div>
    )
}

export default Welcome
