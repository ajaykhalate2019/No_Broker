import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './view/Footer/Footer'
import Section from './view/Section/Section'
import Section1 from './view/Section/Section1'
import SectionEnd from './view/Section/SectionEnd'
import Navbar from './view/Header/Navbar'
// import { Navbar } from 'react-bootstrap'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Log_in from './view/Header/Navgation/Log_in'
import PropertyOwner from './view/Header/Navgation/PropertyOwner'
import Sign_up from './view/Header/Navgation/Sign_up'
import PayRent from './view/Header/Navgation/PayRent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Section/>
      <Section1/>
      <SectionEnd/>
      <Footer/>
      <Router>

          <Routes>
            <Route path="/pay-rent" element={<PayRent/>} />
            <Route path="/login" element={<Log_in/>}/>
            <Route path="/property-owners" element={<PropertyOwner/>}/>
            <Route path="/signup" element={<Sign_up/>}/>
            
          </Routes>
      </Router>
    </>
  )
}

export default App;