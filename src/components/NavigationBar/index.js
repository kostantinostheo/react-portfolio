import './index.css'
import React, {useState, useContext} from 'react';
import { ActiveItemContext } from '../../App';
import { Link } from "react-scroll";

import home from '../../resources/Icons/home.png'
import user from '../../resources/Icons/user.png'
import experience from '../../resources/Icons/experience.png'
import projects from '../../resources/Icons/projects.png'
import contact from '../../resources/Icons/contact.png'


export default function NavigationBar({onVisible}) {
  
  const { activeItem, setActiveItem } = useContext(ActiveItemContext);
  let [value, setValue] = useState('')
  let visible = onVisible
  

  function handleActiveItem(item){
    setActiveItem(item)
    setValue(item)
    console.log(activeItem)
  }
  let style = {
    "filter": value !== "About" ? 'grayscale(100%)' : '' 
  }
  return (
    <div className='NavigationBar'>
      <ul style={{"color": visible === true ? 'black' : '' }} className='navigation'>
        <Link smooth spy to='Home'>
          <img src={home} onClick={() => handleActiveItem('Home')} alt='navigation bar logo'/>
        </Link>
        <Link smooth spy to='About'>
          <img src={user} onClick={() => handleActiveItem('About')} style={style} />
        </Link>
        <Link smooth spy to='Experience'>
          <img src={experience} onClick={() => handleActiveItem('Experience')} style={style}/>
        </Link>
        <Link smooth spy to='Projects'>
          <img src={projects} onClick={() => handleActiveItem('Projects')} style={style}/>
        </Link>
        <Link smooth spy to='Contact'>
          <img src={contact} onClick={() => handleActiveItem('Contact')} style={style}/>
        </Link>
      </ul>
    </div>
  );
}