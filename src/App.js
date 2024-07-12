import logo from './logo.svg';
import './App.css';
import { Landing, About, Portfolio, Contact } from './pages'
import { ContactScroll, ThemeScroll } from './components'
import { ThemeProvider } from './context/themeProvider'


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <div className='container'>
          <ThemeScroll />
          <div className="main">
            <Landing />
            <About />
            <Portfolio />
          </div>
          <Contact />
          <ContactScroll />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
