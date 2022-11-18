import './index.css'
import React, { useEffect, useState, useMemo, useRef} from 'react';
import gmail from '../../resources/gmail.png'
import git from '../../resources/git.png'
import linked from '../../resources/linked.png'

export default function Contact({setVisiblility}) {
  
  const ref1 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);

  useEffect(()=>{setVisiblility(isInViewport1)})
  return (
    <div className='Contact' id='contact'>
      <div ref={ref1} className='centered'>
        <h1>Find Me</h1>
        <div className='row'>
          <img src={gmail} alt='gmail'/>
          <p>ktheofilis [at] gmail.com</p>
        </div>
        <div className='row'>
          <img src={linked} alt='linkedin'/>
          <a href='https://www.linkedin.com/in/kontheo/'><p>kontheo</p></a>
        </div>
        <div className='row'>
          <img src={git} alt='github'/>
          <a href='https://github.com/kostantinostheo'><p>kostantinostheo</p></a>
        </div>
      </div>
    </div>
  ); 
}

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}