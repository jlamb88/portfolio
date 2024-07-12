import React from "react"
import {GithubIcon, LinkedInIcon, EmailIcon  } from "../assets/images";
import { HeroIconDark} from "../components/HeroIconDark"

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-text">
                <span className="contact-title">Contact.</span>
                <div className="contact-row">
                  <HeroIconDark className='jl-icon' id="contact-jl"/>
                  <span className="contact-desc">Multi-faceted full stack web developer available to help maximize your web and digital presence</span>
                </div>
            </div>
            <div className="contact-icons">
                <a href='mailto: jlambfsdesigns@gmail.com' className='contact-email'><EmailIcon width="70" height="70" color="var(--header-text-color)"/></a>
                <a href='https://www.github.com/jlamb88' target='_blank' className="contact-github"><GithubIcon width="65" height="65" color="var(--header-text-color)"/></a>
                <a href='https://linkedin.com/in/jlambfsdesigns' target='_blank' className="contact-linkedin"><LinkedInIcon width="55" height="55" color="var(--header-text-color)" /></a>
            </div>
        </section>
    )
}

