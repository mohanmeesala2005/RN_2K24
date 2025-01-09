import React from "react";
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/navbar'
import AboutUs from './components/aboutus'

import Home from './pages/home'
import Sponsers from './components/sponsers'
import Footer from './components/footer'
import Preloader from './components/preloader'
import SliderComponent from "./components/SliderComponent"
import './App.css'
import './index.css'

import Tabs from "./components/Tabs";
import ProfileCard from "./components/ProfileCard";






const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

function App() {
  return (
    <div  >
      <Preloader/>
      <BrowserRouter>
      <div className="maindiv">
      <Navbar />
     <Routes>
      <Route exact path='/' element = {<Home/>} />
      <Route exact path='/sponsers' element={<Sponsers/>} />
      <Route exact path='/ProfileCard' element={<ProfileCard/>} />
      <Route exact path='/Tabs' element={<Tabs/>} />
      <Route exact path='/SliderComponent' element={<SliderComponent/>} />
      
      </Routes>
     <Footer/>

      </div>
     </BrowserRouter>
    </div>
  )
}


export default App
