import React from 'react'
import "./Blog.css";
import image from "../assests/Group 114.png"
import SingleBlog from './SingleBlog';

export const Blog = () => {
    return (
        <div className="blog">
            <div className="blog__top">
                <img src={image}/>
                <p>Read Our Blog</p>
                <h4>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.</h4>
            </div>
            <div className="blog__bottom">
                <SingleBlog />
                <SingleBlog />
                <SingleBlog />

            </div>
        </div>
    )
};

export default Blog;
