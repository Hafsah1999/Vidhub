import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Addvideo from './components/Addvideo'
import Shorts from './components/Shorts'
import Addshorts from './components/Addshorts'
// import Viewvideo from './components/Viewvideo'

const App = () => {
  
  
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shorts' element={<Shorts />} />

          <Route path='/Addvideo' element={<Addvideo />} />
          <Route path='/Addshorts' element={<Addshorts />} />
          <Route path='/Shorts' element={<Shorts />} />


          {/* <Route path='/Viewvideo/:id' element={<Viewvideo />} /> */}



        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App