import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './view/Header/Navbar'
// import { Navbar } from 'react-bootstrap'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PayRent from './view/Header/Navgation/PayRent';
import PropertyOwner from './view/Header/Navgation/PropertyOwner';
import Log_in from './view/Header/Navgation/Log_in';
import Sign_up from './view/Header/Navgation/Sign_up';
import Home from './view/Home'
import Footer from './view/Footer/Footer'

function App() {
   
  return (
    <>
     <Router>
      <Navbar/>

          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/PayRent" element={<PayRent/>} />
            <Route path="/Log_in" element={<Log_in/>}/>
            <Route path="/PropertyOwner" element={<PropertyOwner />} />
            <Route path="/Sign_up" element={<Sign_up />} />
        
          </Routes>
          <Footer/>
      </Router>
    </>
  )
}

export default App;