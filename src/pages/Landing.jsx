import React from "react";
import { PortfolioButton, AboutButton, ContactButton, HeroIconDark} from "../components";
import { useTheme } from '../context/themeProvider.jsx'

export const Landing = () => {

    return ( 
        <section className="landing">
            <span className="hero-text">Full stack development</span>
            <span className="HTML-text-flourish">&lt;HTML&gt;</span>
            <span className="button-text-flourish">&lt;button&gt;</span>
            <HeroIconDark/>
            <section className="button-panel">
                <a href='#portfolio'><PortfolioButton /></a>
                <a href='#about'><AboutButton /></a>
                <a href='#contact'><ContactButton /></a>
            </section>         
        </section>
    )
}