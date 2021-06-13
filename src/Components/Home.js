import React from 'react'
import "./Home.css"
import image from "../assests/Group 228.png"
import flower from "../assests/Group 195.png"


const Home = () => {
    return (
        <div className="home">
            <div className="home__left">
                <p className="home__leftHeader">Healthly Life with</p>
                <h1>Natural Organic</h1>
                <p className="home__leftPara">
                Vegetables are edible parts of plant
                that is used in the cooking or to be
                eaten now
                </p>
                <button>Explore Now</button>
            </div>
            <div className="home__right">
                <img src={flower}/>
                <div className="home__rightImage">
                   <img src={image}/>
                </div>
            </div>
        </div>
    )
}

export default Home
