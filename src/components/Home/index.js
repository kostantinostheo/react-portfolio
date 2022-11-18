import './index.css'
import React from 'react';
import Typewriter from 'typewriter-effect';
import { salute } from '../../utils/common';

export default function Home() {

  return (
    <div className='Home' id='home'>
      <div className='centered div'>
        <h1 id='my-name'>Konstantinos Theofilis</h1>
        <Typewriter
          options={{
                strings: salute,
                autoStart: true,
                loop: true,
                pauseFor: 3000,
                deleteSpeed: 30,
                delay: 30
              }}
            />
      </div>
    </div>
  );
}