
import { AboutButton} from '../components'

export const About = () => {
   
 return (
    <section className = 'about' id='about'>
        <AboutButton className="about-button"/>
         <div className="mobile-heading">
            <h1>01. About</h1>
        </div>
        <section className='background-top'>
            <h2 className='title'> Background. </h2>
            <section className='text1'>
                <p>My name is Joseph Lamb, and I have followed a dynamic, varied career path combining data science, healthcare, and technology. After earning my undergraduate degree from Georgia Tech, I spent over a decade as a business and database analyst. Driven by a desire to make a more direct impact, I transitioned to healthcare, working for 15 years as a physician assistant specializing in spinal and neurosurgery.</p>
            </section>
        </section>
        <section className='skills-text'>
            <div class="container">
                <div className="skills-box">
                    <h2 className='title'>Skills.</h2>
                    <div className='skills-cascade'>
                        <card className='skills-card'>
                            JavaScript
                        </card>
                        <card className='skills-card'>
                            React
                        </card>
                        <card className='skills-card'>
                            HTML
                        </card>
                            <card className='skills-card'>
                        CSS
                        </card>
                        <card className='skills-card'>
                            Responsive Design
                        </card>
                        <card className='skills-card'>
                            API
                        </card>
                        <card className='skills-card'>
                            Figma
                        </card>
                        <card className='skills-card'>
                            Github
                        </card>
                        <card className='skills-card'>
                            Express
                        </card>
                        <card className='skills-card'>
                            MongoDB
                        </card>
                        <card className='skills-card'>
                            NodeJS
                        </card> 
                    </div>
                </div>
            </div>
            <section className='text2'>
                <p>Despite my fulfilling medical career, I maintained an interest in the technical world and decided to return and completed certification as a full stack web developer at Georgia Tech gaining skills in both front-end and back-end web development and design. I am excited to apply my skills to develop innovative solutions to help with your business needs!</p>
            </section>
            
        </section>
       
    </section>


 )
}