import React, { Component }  from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
// import Work from './Components/Works/Work'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Pricing from './Components/Pricing/Pricing';
import  Explore from  './Components/Explore/Explore';
import  AdminDashboard from './Components/events/AdminDashboard';
import AttendeeDashboard from './Components/attend/AttendeeDashboard '
import OrganizerDashboard from './Components/Organiser/ OrganizerDashboard'
import Navbar2 from './Components/Navbar/Navbar';
import Industry from './Components/Industry/Industry';
import Login  from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';


function App() {
  return (
    // < AdminDashboard />
    // < OrganizerDashboard/>
    // <AttendeeDashboard />
  
 <BrowserRouter>
    <Navbar2/>
    <Routes>
      <Route path="/" element={<About />} />  
      <Route path='Pricing' element={<Pricing/>} />
      <Route path = 'Explore' element={<Explore/>}/>
      <Route path = 'Industry' element={< Industry/>}/>
      <Route path = 'SignUp' element={<SignUp/>}/>
      <Route path = 'Login' element={<Login/>}/>
    </Routes>
</BrowserRouter> 

   
  );
} 

export default App;
