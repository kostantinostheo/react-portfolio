import './index.css'
import React from 'react';

import Typewriter from 'typewriter-effect';
import { salute } from '../../utils/common';
import me from '../../resources/Personal/me.jpg'
import Quotes from '../../resources/Icons/quotes.webp';

export default function Home() {

  return (
    <div className='Home' id='home'>
      <div className='HomeTop'> 
        <h2>THEOFILIS</h2>
        <img src={Quotes} width={40} alt='quotes'/>
      </div>
      <div className='centeredDiv'>
        <div className="mask">
            <img className='myFace' src={me} alt="Cinque Terre" />
        </div>
        <div className='innerDiv'>
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
              <h3>Currently working as a Software Research Associate  <br/> and Unity Software Engineer.</h3>
        </div>
      </div>
    </div>
  );
}