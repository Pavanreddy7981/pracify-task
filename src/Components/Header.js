import React from 'react'
import "./Header.css";
import image from "../assests/Group 228.png"

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src={image}/>
                <h1>organic</h1>
             </div>
            <div className="header__right">
                <h4 style={{borderBottom:"2px solid #00dbd0"}}>Home</h4>
                <h4>Products</h4>
                <h4>Blogs</h4>
                <h4>About Us</h4>
                <h4>Contact</h4>
            </div>
        </div>
    )
}

export default Header
