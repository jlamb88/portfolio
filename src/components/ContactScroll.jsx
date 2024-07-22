
import './components.css'
import {GithubIcon, LinkedInIcon} from '../assets/images'

export const ContactScroll = () => {


 return (
    <section className="contact-scroll">
        <ul>
            <li><a href='https://www.github.com/jlamb88' target='_blank' rel='noreferrer' ><GithubIcon/></a></li>
           <li><a href='https://linkedin.com/in/jlambfsdesigns' target='_blank' rel='noreferrer'><LinkedInIcon/></a></li>
           <li><div className="email-wrapper">
                    <a className="email" href='mailto: jlambfsdesigns@gmail.com'>jlambfsdesigns@gmail.com</a>
                </div>  
            </li>  
        </ul>      
    </section>
 )
}