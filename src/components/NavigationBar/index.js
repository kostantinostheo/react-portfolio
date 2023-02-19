import './index.css'
import React, {useState, useContext} from 'react';
import { ActiveItemContext } from '../../App';
import { Link } from "react-scroll";
import logo from '../../resources/logo.png'


export default function NavigationBar({onVisible}) {
  
  const { activeItem, setActiveItem } = useContext(ActiveItemContext);
  let [value, setValue] = useState('')
  let visible = onVisible
  

  function handleActiveItem(item){
    setActiveItem(item)
    setValue(item)
    console.log(activeItem)
  }

  return (
    <div className='NavigationBar'>
      <ul style={{"color": visible === true ? 'black' : '' }} className='navigation'>
        <Link smooth spy to='Home'>
          <img src={logo} onClick={() => handleActiveItem('Home')} alt='navigation bar logo'/>
        </Link>
        <Link smooth spy to='About'>
          <li onClick={() => handleActiveItem('About')} style={{"color": value === "About" ? '#b32ec5' : '' }}> About </li>
        </Link>
        <Link smooth spy to='Experience'>
          <li onClick={() => handleActiveItem('Experience')} style={{"color": value === "Experience" ? '#b32ec5' : '' }}> Experience </li>
        </Link>
        <Link smooth spy to='Projects'>
          <li onClick={() => handleActiveItem('Projects')} style={{"color": value === "Projects" ? '#b32ec5' : '' }}> Projects </li>
        </Link>
        <Link smooth spy to='Contact'>
          <li onClick={() => handleActiveItem('Contact')} style={{"color": value === "Contact" ? '#b32ec5' : '' }}> Find Me </li>
        </Link>
      </ul>
    </div>
  );
}