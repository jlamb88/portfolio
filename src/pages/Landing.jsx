import React from 'react';
import { PortfolioButton, AboutButton, ContactButton, HeroIcon, MobileTheme, ThemeToggle} from "../components";

import '../components/components.css'
import './load.css'

export const Landing = () => {

    return (
        <>
        <div className='landing-overlay'></div>
        <section className='landing'>
            
            <span className='text-flourish' id='HTML' aria-hidden='true' role='presentation'>&lt;HTML&gt;</span>
            <div className='hero-icon'>
                <HeroIcon />
                <span className='hero-text'>Full stack development</span>
            </div>
            
            <div className='buttons'>
                <span className='text-flourish' id='button' aria-hidden='true'>&lt;button&gt;</span>
                <section className='button-panel'>
                    <a href='#portfolio'><PortfolioButton /></a>
                    <a href='#about'><AboutButton /></a>
                    <a href='#contact'><ContactButton /></a>
                </section>
            </div>
            <MobileTheme />
        </section>
        </>
    )
}