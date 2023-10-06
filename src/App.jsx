
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Events from './pages/Events'
import Plans from './pages/Plans'
import CollageMap from './pages/CollageMap'
import About from './pages/About'
import Gradutes from './pages/Gradutes'
import AddEvents from './adminPage/addEvents'
import {Route, Routes} from 'react-router-dom'

function App() {
  



  return (
    <div className='font-Cairo bg-transparent text-surface'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home title='الصفحة الرئيسية' />} title={'xx'} />
        <Route path='/events' element={<Events title='الاحداث والفعاليات' />}/>
        <Route path='/plans' element={<Plans title='الخطط والمصادر' />} />
        <Route path='/collagemap' element={<CollageMap title='خريطة الكلية' />} />
        <Route path='/about' element={<About title='من نحن' />}/>
        <Route path='/gradutes' element={<Gradutes title='خريجو النادي' />}/>
        
        <Route path='/admin' element={<AddEvents/>}/>
      </Routes>
    <Footer />
    </div>
    
  )
}

export default App
