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
        <h3 className='categoryTitle'>Web Development</h3>
        <div className="proj-grid-container">
          <ProjectCard 
            title="Construction Company " 
            sub="React Website" 
            description="Construction Company Nomikos is a single page application made with React App." 
            projectUrl='https://constructioncompanynomikos.gr'
            logos={[react, node]}
          />
          <ProjectCard 
            title="Auction River"
            sub="Full Stack Application" 
            description="A web MERN application for auctions and online shopping. Practically it's an Ebay clone and was developed as a university assignment." 
            projectUrl='https://github.com/kostantinostheo/AuctionRiver'
            logos={[react, node]}
          />
          <ProjectCard 
            title="My React Portfolio" 
            sub="React Website"
            description="My portfolio web page was completely developed by me using node.js React app." 
            projectUrl='https://github.com/kostantinostheo/AuctionRiver'
            logos={[react, node]}
          />
        </div>
        <h3 className='categoryTitle'>Game Development</h3>
        <div className="proj-grid-container">
          <ProjectCard 
            title="No Handshakes Please" 
            sub="Mobile Game" 
            description="Hyper casual endless runner mobile game made with Unity." 
            projectUrl='https://play.google.com/store/apps/details?id=com.KonstantinosTheofilis.Nohandshakesplease&pli=1'
            logos={[unity, csharp]}
          />
          <ProjectCard 
            title="Brutal Rush" 
            sub="Mobile Game" 
            description="Casual endless mobile game made with Unity. If you like heavy metal you will enjoy it." 
            projectUrl='https://www.meme-arsenal.com/memes/69366e9c8d4d261311289778f712d5b2.jpg'
            logos={[unity, csharp]}
          />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({title, sub, description, projectUrl, logos}){
  return(
    <div className="proj-grid-item">
            <a href={projectUrl} target='_blank' rel="noreferrer">
              <div className='card'>
                <img alt='external link' className='link' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtElEQVR4nO2SMQ6DMAxFuQSoR0A9Sc7dDgztVIbuqVT1Fg+BMiES7GCKWuWNUeJn/7iqCr8IcCVOd5SY3cSzJmrg8VUx0AB98PUiMeCAFzo+wDkibaRibykN5yLx+qX1P30CJ1VNMsSxSWfbfjEVJ+Kd4td0P7ElXqAF3ruIScQbFg5zMYlF0jSfI74tTaqpkSvugPuSVFrD5pFFDYo4gxK1iCOXy2OD14qdgXx875RBFf6MAeVoDxazOQxKAAAAAElFTkSuQmCC"/>
                <h4>{title}</h4>
                <h5>{sub}</h5>
                <p>{description}</p>
                <div className='proj-icons'>
                  {
                    logos.map((logo)=>{
                      return (<img src={logo} alt='a logo that shows application type'/>)
                    })
                  }
                </div>
              </div>
            </a>
          </div>
  );
}