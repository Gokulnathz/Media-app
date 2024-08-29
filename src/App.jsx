
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import VideoHistory from './Pages/VideoHistory'

function App() {
 

  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/watch-history' element={<VideoHistory/>} />
          
        </Routes>
      <Footer/>
    </>
  )
}

export default App
