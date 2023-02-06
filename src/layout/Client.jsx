import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeBanner from '../conponents/HomeBanner'
import MenuCli from '../conponents/MenuCli'

const Client = () => {
  return (
    <>
    <section><MenuCli /></section>
    <section><HomeBanner /></section>
        <div >
              <Outlet />  
        </div>
       
    </>
  )
}

export default Client