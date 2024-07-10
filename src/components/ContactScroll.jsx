
import './components.css'
import {GithubIcon, LinkedInIcon} from '../assets/images'

export const ContactScroll = () => {


 return (
    <section className="contact-scroll">
        <ul>
            <li><a target='_blank' href='https://www.github.com/jlamb88'><GithubIcon/></a></li>
           <li><a target='_blank' href='https://linkedin.com/in/jlambfsdesigns'><LinkedInIcon/></a></li>
           <li><div className="email-wrapper">
                    <a className="email" href='mailto: jlambfsdesigns@gmail.com'>jlambfsdesigns@gmail.com</a>
                </div>  
            </li>  
        </ul>      
    </section>
 )
}