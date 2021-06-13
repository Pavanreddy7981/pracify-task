import React from 'react'
import "./SingleBlog.css";
import soap from "../assests/eucalyptus-essential-oisoap.png"

const SingleBlog = () => {
    return (
        <div className="singleBlog">
            <img src={soap}/>
            <div className="singleBlog__info">
                <h3>Blog Post One</h3>
                <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed
                 do eiusmod.</p>
                 <h5>Read More</h5>
                 
            </div>
        </div>
    )
}

export default SingleBlog
