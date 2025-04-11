import React from "react"
import {useTheme} from '../../context/themeProvider.jsx'
import "./themeToggle.css"

export const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div>
        <label className='toggle' >
        <input 
            name='theme-toggle'
            type='checkbox' 
            label={theme} 
            onChange={toggleTheme} 
            aria-label='Toggle Light and Dark Theme'/>
        <span className='slider'></span>
        </label>
        </div>
    )
}
