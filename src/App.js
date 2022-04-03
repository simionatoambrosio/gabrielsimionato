import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile';
import MenuOptions from './components/MenuOptions';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';

import { useEffect } from 'react';

import Aos from "aos";
import "aos/dist/aos.css"

function App() {
  return (
    <div className="App">
      <Profile data-aos="fade-up" />
      <MenuOptions data-aos="fade-up"/>
      <AboutMe data-aos="fade-up"/>
      <Education data-aos="fade-up"/>
      <Projects data-aos="fade-up"/>
    </div>
  )
}


export default App;
