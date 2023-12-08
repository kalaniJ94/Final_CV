import { React, useState, useEffect, StrictMode } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom';

import Navigation from './components/pages/Navigation';
import GalaxyMap from './components/pages/GalaxyMap';
import ChosenSection from './components/pages/ChosenSection';
import Footer from './components/pages/Footer'; 
import LandingPage from './components/pages/LandingPage';
import logo from './assets/images/logo.png';

function App() {

  useEffect(() => {
    document.title = "Celestial Voyages"
 }, []);

  return (
    <>

    <StrictMode>
    <header>
      <img className= "logoStyle" src={logo} alt="Celestial Vogages logo" />
    </header>
    <Outlet />
    </StrictMode>

    </>
  );
}

  


export default App;
