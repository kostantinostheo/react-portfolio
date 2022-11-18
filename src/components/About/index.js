import './index.css'
import React from 'react';
import pdf from '../../resources/KonstantinosTheofilisCV.pdf';
import download from '../../resources/download.png'
export default function About() {

  return (
    <div className='About' id='about'>
      <div className='centered'>
            <h1>Few words about me</h1>
            <p>
              I’ve been working as an <b style={{"color":"rgb(230, 158, 71)"}}>Associate Software Engineer</b> for the past two years, gaining more experience in the tech industry.
              I have a strong background as an indie game developer with one published game on Google Play. 
              I'm eager to constantly learn and add skills to my toolbox and keep my knowledge and skills up to date. 
            </p>
            <h3>How it started</h3>
            <p>
              Started as a software intern in the QA team, I advanced my knowledge on networking development fundamentals, 
              and I learned how to implement automation tests for web applications and APIs. 
            </p>
            <h3>How its going</h3>
            <p>
              After my internship was finished, I was moved in the Unity team, implementing a Unity wrapper for an SDK, develop in-company applications for testing and 
              creating E2E marketplace applications using Unity and C#. 
            </p>
            <h4>Download My CV</h4>
            <button><a href={pdf} target='_blank' rel="noreferrer"><img src={download} width={40} alt='download button'/></a></button> 
      </div>
    </div>
  );
}