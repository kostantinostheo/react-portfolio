import React, { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import './index.css'
import Box from '../Box';

export default function Contact() {

  return (
    <div className='Contact' id='contact'>
      <div className='row-data'>
        <form>
          <h1>Contact me</h1>
          <div className='label-input'>
            <h5>First Name:</h5>
            <input style={{width:'300px',background:'transparent'}} type="text" id="fname" name="fname"/>
          </div>
          <div className='label-input'>
            <h5>Last Name:</h5>
            <input style={{width:'300px', background:'transparent'}} type="text" id="lname" name="fname"/>
          </div>
          <div className='label-input'>
            <h5>Email:</h5>
            <input style={{width:'300px', background:'transparent'}} type="email" id="email" name="fname"/>
          </div>
          <div className='label-input'>
            <h5>Message:</h5>
            <textarea style={{width:'300px', background:'transparent'}}  rows="4" cols="50"/>  
          </div>
          <button>
            Send
          </button>
        </form>
        <Canvas className='canvas'>
            <OrbitControls enableZoom={false}/>
            <Suspense fallback={null}>
              <Box/>
            </Suspense>
        </Canvas>
      </div>
        
        
    </div>
  ); 
}