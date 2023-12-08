import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/pages/Navigation';
import GalaxyMap from './components/pages/GalaxyMap';
import ChosenSection from './components/pages/ChosenSection';
import Footer from './components/pages/Footer'; 
import LandingPage from './components/pages/LandingPage';

function App() {

  useEffect(() => {
    document.title = "Celestial Voyages"
 }, []);

  return (
    <>
    <LandingPage id="LandingPage"></LandingPage>
    <Footer />
    </>
  // </div>
  );
}

  


export default App;
