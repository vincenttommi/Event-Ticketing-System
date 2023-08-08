import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
// import Work from './Components/Works/Work'
import Footer from './Components/Footer/Footer'
import SignupForm from './Components/Auth/SignupForm'
import LoginForm from './Components/Auth/LoginForm'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Pricing from './Components/Pricing/Pricing';
import  Explore from  './Components/Explore/Explore';
import  AdminDashboard from './Components/events/AdminDashboard';
import AttendeeDashboard from './Components/attend/AttendeeDashboard '
import Navbar2 from './Components/Navbar/Navbar';
// import OrganizerDashboard from  './Components/Organiser/OrganizerDashboard';

function App() {
  return (
  
<BrowserRouter>
    <Navbar2 />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path='Pricing' element={<Pricing/>} />
      <Route path = 'Explore' element={<Explore/>}/>
      <Route path = 'AttendeeDashboard' element={<AttendeeDashboard/>}/>
    </Routes>
</BrowserRouter>
   
  );
} 

export default App;
