import React from "react"
import {useTheme} from '../../context/themeProvider.jsx'
import "./themeToggle.css"

export const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div>
        <label className='toggle'>
        <input type="checkbox" label={theme} onClick={toggleTheme}>
            {/* ::before */}
            <span></span>
        </input>
        </label>
        </div>
    )

}