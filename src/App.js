import './App.css';
import React, { useState } from 'react';
import ScrollSpy from 'react-ui-scrollspy';
import BackToTop from "react-back-to-top-button";

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import arrow from "./resources/ArrowUp.png"

export const ActiveItemContext = React.createContext({
  activeItem: 'home',
  setActiveItem: () => {}
});

function App() {

  const [activeItem, setActiveItem] = useState();
  const value = { activeItem, setActiveItem };

  let[onVisible, setVisible] = useState(false)

  function setVisiblility(state){
    setVisible(state)
  }

  return (
    <div className="App">
      <ActiveItemContext.Provider value={value}>
        <NavigationBar onVisible={onVisible}/>
        <ScrollSpy onUpdateCallback={(id) => setActiveItem(id.charAt(0).toUpperCase() + id.slice(1))} scrollThrottle={100} useBoxMethod={false}>
          <Home/>
          <About/>
          <Experience/>
          <Projects/>
          <Contact setVisiblility={setVisiblility}/>
        </ScrollSpy>
        <BackToTop
          showAt={100}
          speed={1500}
        >
        <img className='top-button' src={arrow} width={40} alt='top button'/>
      </BackToTop>
      </ActiveItemContext.Provider>
    </div>
  );
}

export default App;