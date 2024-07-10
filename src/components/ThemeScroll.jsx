import './components.css'
// import {ThemeToggle} from './themeToggle/themeToggle'

export const ThemeScroll = () => {
 return (
    <section className="theme-scroll">
        <div className='bumper'></div>
        <ul>
            <li><span className="theme-text-flourish">&lt;theme&gt;</span></li>
            <li><div className="theme-tab">
                    <span className="text-value">Light</span>
                </div>
            </li> 
        </ul>    
    </section>
 )
}