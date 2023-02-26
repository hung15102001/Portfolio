import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Client from './layout/Client'
import Profile from './layout/Profile'
import HomePage from './page/HomePage'
// import './App.css'

function App() {
  // bg-gradient-to-r from-purple-500 to-pink-500 h-screen
  return (
    // h-screen bg-[url('../../public/background_main.png')] bg-no-repeat bg-cover
    <div className="">
        <Routes>
            <Route path='/' element={<Client />} >
                <Route index element={<HomePage />} />
            </Route>

            <Route path='/profile' element={<Profile />} >

            </Route>
        </Routes>
    </div>
  )
}

export default App
