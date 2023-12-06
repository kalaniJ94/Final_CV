import React from 'react';

function Navigation({ setActiveSection, activeSection }) {
  return (
    <nav>
      <ul>
        <li className={activeSection === 'galaxyMap' ? 'active' : ''} onClick={() => setActiveSection('galaxyMap')}>Galaxy Map</li>
        <li className={activeSection === 'itinerary' ? 'active' : ''} onClick={() => setActiveSection('itinerary')}>Itinerary</li>
        <li className={activeSection === 'log' ? 'active' : ''} onClick={() => setActiveSection('log')}>Login/Logoff</li>
      </ul>
    </nav>
  );
}

export default Navigation;