import React, { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import './index.css'
import Box from '../Box';
import { formMessage } from '../../utils/common';
import { useState } from 'react';

export default function Contact() {
  let [isEnabled, setIsEnabled] = useState(false)

  function Enable(){
    setIsEnabled(true)
  }
  return (
    <div className='Contact' id='contact'>
      <div className='row-data'>
        <h1 id='titleMobile'>Get in touch</h1>
        <div className='box-container' onSubmit={""}>
          <h1>Contact me</h1>
          <div className='label-input'>
            <h5>First Name:</h5>
            <input style={{width:'300px'}} type="text" id="fname" name="fname"/>
          </div>
          <div className='label-input'>
            <h5>Last Name:</h5>
            <input style={{width:'300px'}} type="text" id="lname" name="lname"/>
          </div>
          <div className='label-input'>
            <h5>Email:</h5>
            <input style={{width:'300px'}} type="email" id="email" name="fname"/>
          </div>
          <div className='label-input'>
            <h5>Message:</h5>
            <textarea style={{width:'300px'}}  type="text" rows="4" cols="50"/>  
          </div>
          {isEnabled === true ?
            <h5 id='userMessage' style={{maxWidth:"300px", textAlign:'justify'}}>{formMessage}</h5>
            :
            <></>
          }
          <button id="submit" style={{marginTop:'10px'}} onClick={Enable}  value="Send"> Send </button>
        </div>
        <Canvas className='canvas'>
            <OrbitControls enableZoom={false}/>
            <Suspense fallback={null}>
              <Box />
            </Suspense>
        </Canvas>
        </div>
        <h5 id='textMobile'>or click <a href="https://linktr.ee/ktheofilis?utm_source=linktree_profile_share&ltsid=213b6583-a619-45ab-9242-2f8b8c1efdb9&fbclid=IwAR3xsgP0FzvSFZmxR49fenRjxutTh4rVzdJxjEimiE0jP7kuOOQSU_5qkvk">here</a></h5>        
    </div>
  ); 
}