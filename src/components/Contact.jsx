import React from "react"
import {GithubIcon, LinkedInIcon, EmailIcon  } from "../assets/images";
import { HeroIconDark} from "./HeroIconDark"

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-text">
                <span className="contact-title">Contact.</span>
                <span className="contact-text">Multi-faceted full stack web developer available to help maximize your web and digital presence</span>
            </div>
            <div className="contact-icons">
                <EmailIcon className="contact-email"/>
                <GithubIcon className="contact-github" />
                <LinkedInIcon className="contact-linkedin" />
            </div>
        </section>
    )
}