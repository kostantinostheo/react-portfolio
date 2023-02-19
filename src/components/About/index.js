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
              Started as a lowly intern, back in 2020, in the QA team, I was so green that plants were jealous of me. But with hard work and determination, I climbed the tech ladder faster than a cat on a hot tin roof.
              I started learning about networking development fundamentals and realized that my brain was bigger than I thought. So, I said to myself, <i>"Self, why not learn how to automate tests for web applications and APIs too?"</i> And 
              let me tell you, automating tests was harder than teaching a dog to play chess, but I managed to pull it off. 
            </p>
            <br/>            
            <p>
              After my internship was finished, I was moved up to the Unity team, and let me tell you, it was like being a kid in a candy store - if the candy store was filled with code instead of candy.
              I was tasked with implementing a Unity wrapper for an SDK, which was like trying to fit a square peg into a round hole, but with some elbow grease and a few swear words, I got it done.
              But that was just the beginning. I also had to develop in-company applications for testing, which was like trying to teach a goldfish to do tricks - it wasn't easy, but it was damn rewarding.
              And then, as if that wasn't enough, I was asked to create E2E marketplace applications using Unity and C#. I mean, who needs sleep when you can be coding all night, right?
            </p>
            <h3>How its going</h3>
            <p>
              Today I work as an Associate Research Engineer at the Department of Informatics and Telecommunications in the University of Athens. 
              I'm knee-deep in coding wizardry for Smart Cities and Digital Twins - it's like playing SimCity, but with less disasters (hopefully).
            </p>
            <h4>Download My CV</h4>
            <button><a href={pdf} target='_blank' rel="noreferrer"><img src={download} width={40} alt='download button'/></a></button> 
      </div>
    </div>
  );
}