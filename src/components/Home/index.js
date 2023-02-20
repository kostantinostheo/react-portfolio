import './index.css'
import React from 'react';
import Typewriter from 'typewriter-effect';
import { salute } from '../../utils/common';
import cmd from '../../resources/cmd.png'
import {useEffect, useRef, useState, useMemo} from 'react';

export default function Home() {
  
  
  const ref1 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);



  return (
    <div className='Home' id='home'>
      <img alt='3dpctr' className='ThreeDImage' src={cmd}/>

      <div className='centered div'>
        <h1 id='my-name'>Konstantinos Theofilis</h1>
        <h2 ref={ref1} id='my-sub'>C:\Users\Software Engineer</h2>
        { isInViewport1 
        ? 
        <Typewriter
          id='Typewriter'
          options={{
                strings: salute,
                autoStart: true,
                loop: true,
                pauseFor: 3000,
                deleteSpeed: 10,
                delay: 30
              }}
            />
            : 
            <div/>
            }
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