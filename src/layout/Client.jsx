import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import HomeBanner from '../conponents/HomeBanner'
import MenuCli from '../conponents/MenuCli'

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

  var bgBeforeScroll =  "h-screen bg-[url('../../public/background_main.png')] bg-no-repeat bg-cover"
  if(scrollTop > 0){
    bgBeforeScroll = "";
  }

  console.log(scrollTop)
  return (
    <div className={bgBeforeScroll}>
    <section><MenuCli /></section>
    {/* <section><HomeBanner /></section> */}
        <div >
              <Outlet />  
        </div>
       
    </div>
  )
}

export default Client