import './index.css'
import React from 'react';
import Typewriter from 'typewriter-effect';
import { salute } from '../../utils/common';

import me from '../../resources/Personal/me.jpg'
import random from '../../resources/Personal/random.png'

export default function Home() {

  return (
    <div className='Home' id='home'>
      <div className='HomeTop'> 
        <h2>THEOFILIS</h2>
      </div>
      <div className='centeredDiv'>
        <div className="gridContainer">
          <div className="gridItem">
            <div>
              <h1>KONSTANTINOS <br/> THEOFILIS</h1>
              <div className='row'>
                <h2>I AM</h2>
                &nbsp;
                <Typewriter
                className='Typewriter'
                options={{
                      strings: salute,
                      autoStart: true,
                      loop: true,
                      pauseFor: 3000,
                      deleteSpeed: 10,
                      delay: 30
                    }}
                />
              </div>
              <h3>Currently working as a Unity Software Engineer. Always working on side projects. </h3>
            </div>
          </div>
          <div className="gridItem">
            <div className="mask">
              <img className='myFace' src={me} alt="Cinque Terre" />
            </div>
            {/* <img className='myFace' src={random}/> */}
          </div>
        </div>
      </div>
        
      </div>
  );
}