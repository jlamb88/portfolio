import React from "react";
import { PortfolioButton} from "../components";
import { EmpireScreenshot, ForesomeScreenshot, WeatherNowScreenshot, GlissonScreenshot, ConjureScreenshot, MobileGithub, MobileLink } from "../assets/images";

export const Portfolio = () => {
    return (
    <section className='portfolio' id='portfolio'>
        <div className='mobile-heading'><h1 aria-label="Portfolio" >02. Portfolio</h1></div>
        <div className='button-container'>
        <PortfolioButton className='portfolio-button'/>
        </div>
        <div className='portfolio-items' aria-label=''>
        <section id='conjure'>
            <section className='info'>
                <h2 className ='heading'>Featured Project</h2>
                <span className='title'> Conjure Yoga</span>
                <div className='description-box' aria-hidden='true'>
                    <span className='description-text'>Small business website designed and built in a custom bespoke design for a yoga studio with an unconventional business model and philosophy. Hosted and built on the Squarespace platform</span>
                </div>
                <span className='technology'>{"<"}Figma HTML CSS JavaScript Squarespace{">"}</span>
                <div className='mobile-icons'>
                    <a href='https://github.com/jlamb88/conjure-yoga' target='_blank' rel='noreferrer' role='button' aria-label='opens in new window' className='mobile-github'>
                        <MobileGithub color='var(--header-text-color)'/>
                    </a>
                    <a href='https://conjureyoga.com/' target='_blank' rel='noreferrer' role='button' aria-label='opens in new window' className='mobile-link'>
                        <MobileLink color='var(--header-text-color)' width='25px' />
                    </a>
                </div>
            </section>
            <div className='img-container'>
                <a href='https://conjureyoga.com/' target='_blank' rel='noreferrer' role='button' aria-label='opens in new window'>
                    <ConjureScreenshot className='conjure-img'/>
                </a>
            </div>
        </section>
        <section id='empire'>
            <section className='info'>
                <h2 className ='heading'>Featured Project</h2>
                <span className='title'> Empire Cheesecake</span>
                <div className='description-box' aria-hidden='true'>
                    <span className='description-text'>An e-commerce application for a bakery with an online store, ordering and online payment through the Stripe payment system. It a fully hosted and built on a full MERN stack.</span>
                </div>
                <span className='technology'>{"<"}MongoDb, Express, React, Node.js (MERN) stack  Stripe API{">"}</span>
                <div className='mobile-icons'>
                    <a href='https://github.com/jlamb88/empire-cheesecakes' target='_blank' rel='noreferrer' role='button' aria-label='opens in new window' className='mobile-github'>
                        <MobileGithub color='var(--header-text-color)'/>
                    </a>
                    <a href='https://empire-cheesecakes-5d8c7fea4138.herokuapp.com//' target='_blank' rel='noreferrer' role='button' aria-label='opens in new window' className='mobile-link'>
                        <MobileLink color='var(--header-text-color)' width='25px' />
                    </a>
                </div>
            </section>
            <div className='img-container'>
                <a href='https://empire-cheesecakes-5d8c7fea4138.herokuapp.com/' target='_blank' rel='noreferrer' role='button' aria-label='opens in new window'>
                    <EmpireScreenshot className='empire-img'/>
                </a>
            </div>
        </section>
        <section id='glisson'>
        <section className='info'>
                <h2 className ='heading'>Featured Project</h2>
                <span className='title'>Glisson Camps</span>
                <div className='description-box' aria-hidden='true'>
                    <span className='description-text'>Site for information and registration for summer camps hosted by the Glisson Organization in Georgia </span>
                </div>
                <span className='technology'>{"<"}Wordpress HTML  CSS  API{">"}</span>
                <div className='mobile-icons'>
                    <a href='https://www.glisson.org/outpost-camp/' target='_blank' rel='noreferrer' role='button' aria-label='opens in new window' className='mobile-github'>
                        <MobileGithub color='var(--header-text-color)'/>
                    </a>
                    <a href='https://glisson.org/outpost-camp/' target='_blank' rel='noreferrer' role='button' aria-label='opens in new window' className='mobile-link'>
                        <MobileLink color='var(--header-text-color)' width='25px' />
                    </a>
                </div>  
            </section>
            <div className='img-container'>
                    <a href='https://glisson.org/outpost-camp/' target='_blank' rel='noreferrer' role='button' aria-label='opens in new window'>
                        <GlissonScreenshot className='glisson-img'/>
                    </a>
            </div>
        </section>
        <section id='weather'>
            <section className='info'>
                <span className ='heading'>Featured Project</span>
                <span className='title'>Weather Now</span>
                <div className='description-box'>
                    <span className='description-text'>A weather application that allows the user to obtain the weather based on location name or zip code search and provides both the current weather and the five day forecast. A search history shows previous locations searched.</span>
                </div>
                <span className='technology'>{"<"}HTML  CSS  API{">"}</span>
                <div className='mobile-icons'>
                    <a href='https://github.com/jlamb88/WeatherApp-serverAPI' target='_blank' rel='noreferrer' role='button' aria-label='opens in new window' className='mobile-github'>
                        <MobileGithub color="var(--header-text-color)"/>
                    </a>
                    <a href='https://jlamb88.github.io/WeatherApp-serverAPI/' target="_blank" rel='noreferrer' role='button' aria-label='opens in new window' className="mobile-link">
                        <MobileLink color="var(--header-text-color)" width="25px" />
                    </a>
                </div>
            </section>
            <div className ='img-container'>
                    <a href='https://jlamb88.github.io/WeatherApp-serverAPI/' target="_blank" rel='noreferrer' role='button' aria-label='opens in new window'>
                        <WeatherNowScreenshot className='weatherNow-img'/>
                    </a>
            </div>
        </section>
        <section id='foresome'>
            <section className='info'>
                <h2 className ='heading'>Featured Project</h2>
                <span className='title'>Foresome</span>
                <div className='description-box'>
                    <span className='description-text'>A golf planning application that provides the user with the 5 day weather forecast, available courses and user’s scheduling to allow for easy planning and booking of golf tee times.</span>
                </div>
                <span className='technology'>{"<"}HTML  CSS  API{">"}</span>
                <div className='mobile-icons'>
                    <a href='https://github.com/jlamb88/Foresome-Golf-Planner' target='_blank' rel='noreferrer' role='button' aria-label='opens in new window' className="mobile-github">
                        <MobileGithub color="var(--header-text-color)"/>
                    </a>
                    <a href='https://jlamb88.github.io/Foresome-Golf-Planner/' target="_blank" rel='noreferrer' role="button" aria-label="opens in new window" className="mobile-link">
                        <MobileLink color="var(--header-text-color)" width="25px" />
                    </a>
                </div>
            </section>
            <div className='img-container' aria-label=''>
                    <a href='https://jlamb88.github.io/Foresome-Golf-Planner' target='_blank' rel='noreferrer' role="button" aria-label="opens in new window">
                        <ForesomeScreenshot className='foresome-img'/>
                    </a>
            </div>
            
            
        </section>
        </div>
    </section>   
    )      
}
