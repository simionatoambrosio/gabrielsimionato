import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile';
import MenuOptions from './components/MenuOptions';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';

import { useEffect, useState, createContext } from 'react';

import Aos from "aos";
import "aos/dist/aos.css"
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme} >
        <div className='switch'>
          {/* <p>{theme === "light" ? "Light Mode" : "Dark Mode"}</p> */}
          <p>Dark Mode</p>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} uncheckedIcon={false} checkedIcon={false} onColor="#A852FF" onHandleColor="white" />
        </div>
        <Profile data-aos="fade-up" />
        <MenuOptions data-aos="fade-up" />
        <AboutMe data-aos="fade-up" />
        <Education data-aos="fade-up" />
        <Projects data-aos="fade-up" />
      </div>
    </ThemeContext.Provider>
  )
}


export default App;
