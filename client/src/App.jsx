import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/pages/Navigation';
import GalaxyMap from './components/pages/GalaxyMap';
import ChosenSection from './components/pages/ChosenSection';
import Footer from './components/pages/Footer'; 
import LandingPage from './components/pages/LandingPage';

function App() {
  const [activeSection, setActiveSection] = useState('LandingPage');

  useEffect(() => {
    document.title = "Celestial Voyages"
 }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'GalaxyMap':
        return <GalaxyMap />;
      case 'chosenSection':
        return <ChosenSection />;
      default:        
      return <LandingPage />;

    }
  };
  return (
    <div className='pageContainer'>
    <Navigation setActiveSection={setActiveSection} />
    <main className='contentWrap'>
      {renderSection()}
    </main>
    <Footer />
  </div>
);
  
}

export default App;
