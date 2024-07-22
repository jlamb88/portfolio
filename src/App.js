import './App.css';
import { Main, Contact } from './pages'
import { ContactScroll, ThemeScroll } from './components'
import { ThemeProvider, useTheme } from './context/themeProvider'


function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <Main />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
