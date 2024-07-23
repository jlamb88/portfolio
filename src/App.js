import { Main, Contact } from './pages'
import { ThemeProvider } from './context/themeProvider'


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
