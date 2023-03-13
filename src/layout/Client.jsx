import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import HomeBanner from '../conponents/HomeBanner'
import MenuCli from '../conponents/MenuCli'
import bg_home from "../assets/background_main.png";
const Client = () => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  var bgBeforeScroll =  `h-screen`
  if(scrollTop > 0){
    bgBeforeScroll = "";
  }

  console.log(scrollTop)
  return (
    <div className={bgBeforeScroll} style={{background: `url(${bg_home})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
    <section><MenuCli /></section>
    {/* <section><HomeBanner /></section> */}
        <div >
              <Outlet />  
        </div>
       
    </div>
  )
}

export default Client