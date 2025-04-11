import './components.css'
import {ThemeToggle} from './themeToggle/themeToggle'
import {useTheme} from '../context/themeProvider'

export const MobileTheme = () => {

    const { theme } = useTheme()
    
    return (
    <section className='mobile-theme'>
        <div className='theme-tab'>
            <ThemeToggle />
            <span className='text-value'>{theme}</span>
        </div>
    </section>
 )
}