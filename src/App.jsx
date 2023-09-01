import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'


function App() {
  

  

  return (
    <div className='w-full flex justify-center items-center h-screen bg-slate-100'>
      <div className='flex flex-col justify-center gap-10 w-32'>
        <Button primary >فعال</Button>
        <Button secondary >فعال</Button>
        <Button surface >فعال</Button>
      </div>
    </div>
    
  )
}

export default App
