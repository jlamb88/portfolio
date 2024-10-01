import React from "react";
import { PortfolioButton, AboutButton, ContactButton, HeroIconDark} from "../components";
import { ThemeScroll } from '../components'

import '../components/components.css'

export const Landing = () => {

    return ( 
        <section className="landing">
            <span className="HTML-text-flourish">&lt;HTML&gt;</span>
            <div className="hero-icon">
                <HeroIconDark />
                <span className="hero-text">Full stack development</span>
            </div>
            <div className="buttons">
                <span className="button-text-flourish">&lt;button&gt;</span>
                <section className="button-panel">
                    <a href='#portfolio'><PortfolioButton /></a>
                    <a href='#about'><AboutButton /></a>
                    <a href='#contact'><ContactButton /></a>
                </section>
            </div>
        </section>
    )
}