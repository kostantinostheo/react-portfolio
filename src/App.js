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
import { Helmet } from 'react-helmet';
export const ActiveItemContext = React.createContext({
  activeItem: 'home',
  setActiveItem: () => {}
});

function App() {

  const [activeItem, setActiveItem] = useState();
  const value = { activeItem, setActiveItem };

  return (
    <div className="App">
      <Helmet>
          <title>Konstantinos Theofilis</title>
          <meta 
            name='description'
            content='Konstantinos Theofilis'
          >
          </meta>
          <meta name='keywords' content='Software Engineer, Programming, Profile, Portfolio'></meta>
      </Helmet>
      <ActiveItemContext.Provider value={value}>
        <NavigationBar/>
        <ScrollSpy onUpdateCallback={(id) => setActiveItem(id.charAt(0).toUpperCase() + id.slice(1))} scrollThrottle={100} useBoxMethod={false}>
          <Home/>
          <About/>
          <Experience/>
          <Projects/>
          <Contact/>
        </ScrollSpy>
        <BackToTop style={{"margin":"30px","padding":"0", "marginLeft":"0px", "marginTop":"0px", "zIndex" : "1000"}}
          showAt={100}
          speed={1500}
        >
        <img className='top-button' src={arrow} alt='top button'/>
      </BackToTop>
      </ActiveItemContext.Provider>

    </div>
  );
}

export default App;