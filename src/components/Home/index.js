import './index.css'
import React from 'react';
import Typewriter from 'typewriter-effect';
import { salute } from '../../utils/common';
import cmd from '../../resources/cmd.png'

export default function Home() {

  return (
    <div className='Home' id='home'>
      <img alt='3dpctr' className='ThreeDImage' src={cmd}/>

      <div className='centered div'>
        <h1 id='my-name'>Konstantinos Theofilis</h1>
        <h2 id='my-sub'>C:\Users\Software Engineer</h2>
        <Typewriter
        id='Typewriter'
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
    </div>
  );
}