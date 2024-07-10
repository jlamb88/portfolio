import React from "react";
import { PortfolioButton} from "../components";
import { EmpireScreenshot, ForesomeScreenshot, WeatherNowScreenshot } from "../assets/images";

export const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            
        <PortfolioButton className="port-button"/>
        <section className='weatherNow'>
            <section className="info">
                <span className ='heading'>Featured Project</span>
                <span className='title'>Weather Now</span>
                <div className='desc'>
                    <span className='desc-text'>A weather application that allows the user to obtain the weather based on location name or zip code search and provides both the current weather and the five day forecast. A search history shows previous locations searched.</span>
                </div>
            <span className='tech'>{"<"}HTML, CSS, API{">"}</span>
            </section>
            <div className ="img-container">
                <div className = 'overlay'></div>
                <a href='https://jlamb88.github.io/WeatherApp-serverAPI/'><WeatherNowScreenshot className='weatherNow-img'/></a>
            </div>
        </section>
        <section className='foresome'>
            <section className='info'>
                <span className ='heading'>Featured Project</span>
                <span className='title'>Foresome</span>
                <div className='desc'>
                    <span className='desc-text'>A golf planning application that provides the user with the 5 day weather forecast, available courses and user’s scheduling to allow for easy planning and booking of golf tee times.</span>
                </div>
                <span className='tech'>{"<"}HTML, CSS, API{">"}</span>
            </section>
            <div className="img-container">
                <div className='overlay'></div>
                <a href='https://jlamb88.github.io/ForeSome-GolfPlannerApp/'><ForesomeScreenshot className='foresome-img'/></a>
            </div>
        </section>
        <section className='empire'>
            <section className='info'>
                <span className ='heading'>Featured Project</span>
                <span className='title'> Empire Cheesecakes</span>
                <div className='desc'>
                    <span className='desc-text'>An e-commerce application for a bakery with an online store, ordering and online payment through the Stripe payment system. It a fully hosted and built on a full MERN stack.</span>
                </div>
                <span className='tech'>{"<"}MongoDb, Express, React, Node.js (MERN) stack, Stripe API{">"}</span>
            </section>
            <div className="img-container">
                <div className='overlay'></div>
                <a href='https://empire-cheesecakes-5d8c7fea4138.herokuapp.com/'><EmpireScreenshot className='empire-img'/></a>
            </div>
        </section>

        </section>   
    )      
}
