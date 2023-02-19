import React from 'react';
import Typewriter from 'typewriter-effect';
import './index.css'
import react from '../../resources/react.png'
import csharp from '../../resources/csharp.png'
import dotnet from '../../resources/dotnet.webp'
import unity from '../../resources/unity.webp'
import node from '../../resources/node.png'


export default function Projects() {

  
  return (
    <div className='Projects' id='projects'>
      <div className='centered'>
        <h1>Sample projects</h1>
        <div className="proj-grid-container">
          <div className="proj-grid-item">
            <a href='https://github.com/kostantinostheo/.NET-Bash-Wrapper' target='_blank' rel="noreferrer">
              <div className='card'>
                <div className='proj-icons'>
                  <img src={dotnet} alt='dotnet icon'/>
                  <img src={csharp} alt='csharp icon'/>
                </div>
                <h4>.NET-Bash-Wrapper</h4>
                <p>A set of C# methods that helps you execute bash-shell commands or .sh files</p>
              </div>
            </a>
          </div>
          <div className="proj-grid-item">
            <a href='https://github.com/kostantinostheo/AuctionRiver' target='_blank' rel="noreferrer">
              <div className='card'>
                <div className='proj-icons'>
                  <img src={react} alt='react icon'/>
                  <img src={node} alt='nodejs icon'/>
                </div>
                <h4>AuctionRiver</h4>
                <p>A web application for auctions and online shopping</p>
              </div>
            </a>
          </div>
          <div className="proj-grid-item">
            <a href='https://play.google.com/store/apps/details?id=com.KonstantinosTheofilis.Nohandshakesplease&pli=1' target='_blank' rel="noreferrer">
              <div className='card'>
                <div className='proj-icons'>
                  <img src={unity} alt='unity icon'/>
                  <img src={csharp} alt='csharp icon'/>
                </div>
                <h4>No Handshakes Please</h4>
                <p>Hyper casual endless runner mobile game made with Unity</p>
              </div>
            </a>
          </div>
          <div className="proj-grid-item">
              <p style={{"textAlign": "left", "fontSize":"19px", "position":'absolute' ,"bottom":"0", "paddingBottom":"25px", "margin":0}}>
                <Typewriter
                  className='typewritter'
                  options={{
                    strings: ["More coming soon...","No kidding..."],
                    autoStart: true,
                    loop: true,
                    pauseFor: 6000,
                    deleteSpeed: 30,
                    delay: 30
                  }}/>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}