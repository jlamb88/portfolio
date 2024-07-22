
import {GithubIcon, LinkedInIcon, EmailIcon  } from "../assets/images";
import { HeroIconDark} from "../components/HeroIconDark"

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-text">
                <span className="contact-title">Contact.</span>
                <div className="contact-row">
                  <HeroIconDark className='jl-icon' id="contact-jl" aria-hidden='true'/>
                  <span className="contact-desc">Multi-faceted full stack web developer available to help maximize your web and digital presence</span>
                </div>
            </div>
            <div className="contact-icons">
                <a href='mailto: jlambfsdesigns@gmail.com' className='contact-email' aria-label="e-mail contact link"><EmailIcon role="button" width="70" height="70" color="var(--header-text-color)"/></a>
                <a href='https://www.github.com/jlamb88' target='_blank' rel='noreferrer' className="contact-github" aria-label="github link"><GithubIcon role="button" width="65" height="65" color="var(--header-text-color)"/></a>
                <a href='https://linkedin.com/in/jlambfsdesigns' target='_blank' rel='noreferrer' className="contact-linkedin" aria-label='linkedin link'><LinkedInIcon role="button" width="55" height="55" color="var(--header-text-color)" /></a>
            </div>
        </section>
    )
}

