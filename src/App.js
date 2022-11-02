
import './App.css';
import { useState } from 'react';
import NavBar from './Components/Navbar/Navbar';
import './Components/Navbar/navbar.css'
import './Components/Search-Bar/searchbar.css'
import './Components/Body/body.css'
import './Components/Card/card.css'
import './Components/Checkout/checkout.css'
import './Components/Register/register.css'
import Body from './Components/Body/Body'
import Checkout from './Components/Checkout/Checkout';
import Register from './Components/Register/Register-component'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';




function App () {
    
  return ( 
  
  <Router>
    
    <NavBar /> 
  <Routes>
      <Route path='/' element={<Body />}/>
      <Route path='/checkout' element={<Checkout />}/>
      <Route path='/register' element={<Register />}/>
      
  </Routes>
  </Router>
  
  
        
      
      )
}

export default App;
