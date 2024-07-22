import React from "react"
import {useTheme} from '../../context/themeProvider.jsx'
import "./themeToggle.css"

export const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div>
        <label className='toggle'>
        <input type="checkbox" label={theme} onClick={toggleTheme}/>
        <span className="slider"></span>
        </label>
        </div>
    )
}
