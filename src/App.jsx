
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Events from './pages/Events'

import {Route, Routes} from 'react-router-dom'

function App() {
  



  return (
    <div className='font-Cairo bg-transparent text-surface'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events' element={<Events/>}/>
        <Route/>
        <Route/>
      </Routes>
    <Footer />
    </div>
    
  )
}

export default App
