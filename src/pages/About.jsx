
import { AboutButton} from '../components'

export const About = () => {
   
 return (
    <section className = 'about' id='about'>
        <AboutButton className="about-button"/>
        <h1 className="mobile-heading">01. About</h1>
        <section className='background-box'>
            <h2 className='title'> Background. </h2>
            <section className='text1'>
                <p>My name is Joseph Lamb and I have had a diverse career path thus far. After graduating from Georgia Tech with a Bachelor’s Degree in Applied Psychology with a specialization in human factors, user interfaces, and man-machine systems, I worked for over 10 years as a business analyst and database analyst, gaining valuable technical skills and experience in data analysis, user testing and data reporting.</p>
                <p>However, I realized that I wanted to make a more direct impact on people's lives, which led me to return to graduate school and become a physician assistant. For 15 years, I had the privilege of specializing in spinal and neurosurgery and helping my patients and recover from various conditions and procedures.</p>
            </section>
            <section className='text2'>
                <p>Despite my fulfilling career as a physician assistant, I maintained a keen interest in technology and decided to return to the technical world and pursued certification as a full stack web developer at Georgia Tech and gained skills in both front-end and back-end web development and design. I am excited to apply my skills to develop innovative solutions to help you and your business with your needs.</p>
            </section>
        </section>
        <section className='skills-box'>
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
        </section>
       
    </section>


 )
}