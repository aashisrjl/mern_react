import React from 'react'
import LandingPage from './sections/LandingPage'
import Faq from './sections/Faq'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
 
    <>
    <BrowserRouter>
    <Navbar/>
    <LandingPage/>
    <Routes>
      <Route path="/dashboard"  />
      <Route path="/faq"  />
      </Routes>
      <Faq/>
    <Footer/>
    </BrowserRouter>
    </>
   
  )
}

export default App
