import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './assets/pages/Navigation';
import GalaxyMap from './assets/pages/GalaxyMap';
import ChosenSection from './assets/pages/ChosenSection';
import Footer from './assets/pages/Footer'; 
import LandingPage from './assets/pages/LandingPage';

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
