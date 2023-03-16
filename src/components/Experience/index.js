import React from 'react';
import './index.css';
import wappier from '../../resources/wappier.jpg'
import dit from '../../resources/uoa.jpg'
import dsphere from '../../resources/dsphere.jpg'
import rocket from '../../resources/rocket.webp'

export default function Experience() {

  

  return (
    <div className='Experience' id='experience'>
      
      <img alt='3dpctr' className='rocketImage' src={rocket}/>
      
      <div className='centered-exp'>
        <h1>Work experience</h1>
        <h5>Adventures in techland - a memoir</h5>
        <div className="grid-container">
          <div className="grid-item">
            <a href='https://www.di.uoa.gr' target='_black' rel="noreferrer"><img src={dit} width={60} alt='wappier logo'/></a>
          </div>
          <div className="grid-item">
            <div>
              <h3 id='work-title'>Associate Research Engineer</h3>
              <h4 id='work-sub'><a href='https://www.di.uoa.gr' target='_black' rel="noreferrer"> National and Kapodistrian University of Athens<br/>Department of Informatics and Telecommunications </a></h4>
              <h4 id='date'>Jan 2023 - Present</h4>
              <br/>
              <h4 id='date'>● Digital Twins Development</h4>
              <h4 id='date'>● Unity Development</h4>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <a href='https://www.dsphere.io' target='_black' rel="noreferrer"><img src={dsphere} width={60} alt='dsphere logo'/></a>
          </div>
          <div className="grid-item">
            <div>
              <h3 id='work-title'>Associate Software Engineer</h3>
              <h4 id='work-sub'><a href='https://www.dsphere.io' target='_black' rel="noreferrer">dSphere.io</a></h4>
              <h4 id='date'>Sep 2022 - Dec 2022 </h4>
              <br/>
              <h4 id='date'>● Unity NFT Markeplace implementation</h4>
              <h4 id='date'>● Unity Development</h4>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <a href='https://wappier.com' target='_black' rel="noreferrer"><img src={wappier} width={60} alt='wappier logo'/></a>
          </div>
          <div className="grid-item">
            <div>
              <h3 id='work-title'>Associate Software Engineer</h3>
              <h4 id='work-sub'><a href='https://wappier.com' target='_black' rel="noreferrer">wappier: Intelligent Revenue Management</a></h4>
              <h4 id='date'>Dec 2020 - Sep 2022</h4>
              <br/>
              <h4 id='date'>● Automation Testing with Node.js</h4>
              <h4 id='date'>● In company testing application with Unity</h4>
              <h4 id='date'>● Unity Development</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}