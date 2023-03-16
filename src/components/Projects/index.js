import React from 'react';
import './index.css'
import react from '../../resources/Logos/react.png'
import csharp from '../../resources/Logos/csharp.png'
import unity from '../../resources/Logos/unity.png'
import node from '../../resources/Logos/node.png'


export default function Projects() {

  
  return (
    <div className='Projects' id='projects'>
      <div className='centered'>
        <h1>Sample projects</h1>
        <h5 style={{marginTop: "0"}}>Only for Tech Tasters</h5>
        <div className="proj-grid-container">
          <div className="proj-grid-item">
            <a href='https://github.com/kostantinostheo/.NET-Bash-Wrapper' target='_blank' rel="noreferrer">
              <div className='card'>
                <div className='proj-icons'>
                  <img src={csharp} alt='csharp icon'/>
                </div>
                <h4>.NET-Bash-Wrapper</h4>
                <p>A C# wrapper that helps you execute bash-shell commands or .sh files</p>
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
                <p>A web MERN application for auctions and online shopping</p>
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
        </div>
      </div>
    </div>
  );
}