import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Home from './pages/Home'

import {Route, Routes} from 'react-router-dom'

function App() {
  



  return (
    <div className='font-Cairo bg-transparent text-surface'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route/>
        <Route/>
        <Route/>
      </Routes>

    </div>
    
  )
}

export default App
