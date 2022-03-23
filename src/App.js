import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile';
import MenuOptions from './components/MenuOptions';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Profile/>

      <MenuOptions/>

      <AboutMe/>
      <Education/>
      <Projects/>
    </div>
  );
}

export default App;
