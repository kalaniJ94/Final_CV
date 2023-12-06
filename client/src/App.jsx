import { useState } from 'react'
import './App.css'

import Navigation from './components/pages/Navigation';
import GalaxyMap from './components/pages/GalaxyMap';
import ChosenSection from './components/pages/ChosenSection';
import Footer from './components/pages/Footer'; 
import LandingPage from './components/pages/LandingPage';

function App() {
  const [activeSection, setActiveSection] = useState('LandingPage');

  const renderSection = () => {
    switch (activeSection) {
      case 'LandingPage':
        return <LandingPage />;
      case 'chosenSection':
        return <ChosenSection />;
      default:
        return <GalaxyMap />;
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
