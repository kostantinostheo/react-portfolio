import React from 'react';
import './index.css';
import wappier from '../../resources/wappier.jpg'
import dsphere from '../../resources/dsphere.jpg'

export default function Experience() {

  

  return (
    <div className='Experience' id='experience'>
      <div className='centered'>
        <h1>Work experience</h1>
        <div className="grid-container">
          <div className="grid-item">
            <a href='https://www.dsphere.io' target='_black' rel="noreferrer"><img src={dsphere} width={60} alt='dsphere logo'/></a>
          </div>
          <div className="grid-item">
            <div>
              <h3 id='work-title'>Associate Software Engineer</h3>
              <h4 id='work-sub'><a href='https://www.dsphere.io' target='_black' rel="noreferrer">dSphere.io</a></h4>
              <h4 id='date'>Sep 2022 - Present </h4>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}