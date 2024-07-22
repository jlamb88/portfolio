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
                <div className='description-box'>
                    <span className='description-text'>A weather application that allows the user to obtain the weather based on location name or zip code search and provides both the current weather and the five day forecast. A search history shows previous locations searched.</span>
                </div>
            <span className='technology'>{"<"}HTML, CSS, API{">"}</span>
            </section>
            <div className ="img-container">
                <div className = 'overlay'></div>
                <a href='https://jlamb88.github.io/WeatherApp-serverAPI/' target="_blank" role="button" aria-label="opens in new window"><WeatherNowScreenshot className='weatherNow-img'/></a>
            </div>
        </section>
        <section className='foresome'>
            <div className="img-container">
                <div className='overlay' aria-hidden="true"></div>
                <a href='https://jlamb88.github.io/Foresome-Golf-Planner' target='_blank' role="button" aria-label="opens in new window"><ForesomeScreenshot className='foresome-img'/></a>
            </div>
            <section className='info'>
                <span className ='heading'>Featured Project</span>
                <span className='title'>Foresome</span>
                <div className='description-box'>
                    <span className='description-text'>A golf planning application that provides the user with the 5 day weather forecast, available courses and user’s scheduling to allow for easy planning and booking of golf tee times.</span>
                </div>
                <span className='technology'>{"<"}HTML, CSS, API{">"}</span>
            </section>
            
        </section>
        <section className='empire'>
            <section className='info'>
                <span className ='heading'>Featured Project</span>
                <span className='title'> Empire Cheesecakes</span>
                <div className='description-box'>
                    <span className='description-text'>An e-commerce application for a bakery with an online store, ordering and online payment through the Stripe payment system. It a fully hosted and built on a full MERN stack.</span>
                </div>
                <span className='technology'>{"<"}MongoDb, Express, React, Node.js (MERN) stack, Stripe API{">"}</span>
            </section>
            <div className="img-container">
                <div className='overlay' aria-hidden="true"></div>
                <a href='https://empire-cheesecakes-5d8c7fea4138.herokuapp.com/' target='_blank' role="button" arai-label="opens in new window"><EmpireScreenshot className='empire-img'/></a>
            </div>
        </section>

        </section>   
    )      
}
