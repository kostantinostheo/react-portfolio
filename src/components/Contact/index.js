import './index.css'
import React from 'react';
import tree from '../../resources/linkedTree.png'

export default function Contact() {

  return (
    <div className='Contact' id='contact'>
      <div className='centered'>
        <h1>Find Me</h1>
        <img alt='qr_code' className='qrcode' src={tree}/>
      </div>
    </div>
  ); 
}