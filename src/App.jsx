import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Client from './layout/Client'
import HomePage from './page/HomePage'
// import './App.css'

function App() {

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-screen">
        <Routes>
            <Route path='/' element={<Client />} >
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    </div>
  )
}

export default App
