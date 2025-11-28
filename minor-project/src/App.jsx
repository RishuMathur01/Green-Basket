
import React from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import Home from './pages/Home'
import Footer from './componets/Footer'
import Products from './pages/Products'
import Farmer from "./pages/Farmers"
import FarmerDashboard from './pages/FarmerDashboard'
import ConsumerDashboard from './componets/ConsumerDashboard'

import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Aboutus from './pages/AboutUs'
import ContactUs from './pages/ContactUS'


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/product' element={<Products/>}/>
    <Route path='/farmer' element={<Farmer/>}/>
    <Route path='/fsd' element={<FarmerDashboard/>}/>
    <Route path='/csd' element={<ConsumerDashboard/>}/>
    <Route path='/abUs' element={<Aboutus/>}/>
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/consumerdashboard" element={<ConsumerDashboard/>} />


    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App
