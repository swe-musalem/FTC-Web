
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Events from './pages/Events'
import Plans from './pages/Plans'
import CollageMap from './pages/CollageMap'
import About from './pages/About'
import DBContext from './firebase/DBContext'

import {Route, Routes} from 'react-router-dom'

function App() {
  



  return (
    <div className='font-Cairo bg-transparent text-surface'>
      <Navbar/>
      {/* <DBContext/> */}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events' element={<Events/>}/>
        <Route path='/plans' element={<Plans/>} />
        <Route path='/collagemap' element={<CollageMap/>} />
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    <Footer />
    </div>
    
  )
}

export default App
