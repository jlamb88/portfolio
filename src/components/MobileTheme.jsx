import './components.css'
import {ThemeToggle} from './themeToggle/themeToggle'
import {useTheme} from '../context/themeProvider'

export const MobileTheme = () => {

    const { theme } = useTheme()
    
    return (
    <section className="mobile-theme">
        <ul>
            <li><span className="theme-text-flourish">&lt;theme&gt;</span></li>
            <li>
                <div className="theme-tab">
                    <span className="text-value">{theme}</span>
                    <ThemeToggle />
                </div>
            </li> 
        </ul>    
    </section>
 )
}