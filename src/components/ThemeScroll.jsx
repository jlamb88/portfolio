import './components.css'
import {ThemeToggle} from './themeToggle/themeToggle'
import {useTheme} from '../context/themeProvider'

export const ThemeScroll = () => {

    const { theme } = useTheme()
    
    return (
    <section className="theme-scroll">
        <ul>
            <li><span className="theme-text-flourish">&lt;theme&gt;</span></li>
            <li><div className="theme-tab">
                <ThemeToggle />
                    <span className="text-value">{theme}</span>
                </div>
            </li> 
        </ul>    
    </section>
 )
}