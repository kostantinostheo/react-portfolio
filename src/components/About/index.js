import './index.css'
import React from 'react';
import pdf from '../../resources/KonstantinosTheofilisCV.pdf';
import download from '../../resources/download.png'
export default function About() {

  return (
    <div className='About' id='about'>
      <div className='centered'>
            <h1 style={{marginBottom: "0"}}>Few words about me</h1>
            <h5 style={{marginTop: "0"}}>More words than you expected, but hey, at least it's not a PowerPoint presentation!</h5>
            <br/>            
            <h3>How it started</h3>
            <p>
            My journey started back in 2020 as an intern in the QA team. I was quite inexperienced, to say the least. I had a lot to learn, but I was determined to grow in the tech world.
            I began diving into networking development fundamentals and discovered that I had more potential than I initially thought. 
            This led me on automating tests for web applications and APIs. I'll admit, it was a bit tougher than I expected, but I managed to make it work.
            </p>
            <br/>            
            <p>
            After my internship, I moved up to the Unity team. My main task was to create a Unity wrapper for an SDK, which sometimes felt like fitting a square peg into a round hole. 
            However, with persistence and a few swearing I managed to accomplish it. But that was just the beginning. I also had to develop in-house applications for testing. 
            It wasn't a walk in the park, but the challenges were incredibly rewarding. And if that wasn't enough, I was even asked to create end-to-end marketplace applications using 
            Unity and C#. 
            <br/>Who needs sleep when you can code all night, right?
            </p>
            <h3>How its going</h3>
            <p>
              Today I work as an Associate Research Engineer at the Department of Informatics and Telecommunications in the University of Athens. 
              I'm knee-deep in coding wizardry for Smart Cities and Digital Twins - it's like playing SimCity, but with less disasters (hopefully).
            </p>
            <div className='download_contain'>
            <a href={pdf} target='_blank' rel="noreferrer" style={{"textDecoration": "none"}}>
              <button className='download_cv'>
                <b>Download my CV </b>
                <img src={download} width={40} alt='download button'/>
              </button> 
              </a>
            </div>
           
      </div>
    </div>
  );
}