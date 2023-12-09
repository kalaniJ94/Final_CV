import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navigation({ activePage, setActivePage }) {
  return (
    <Container>

  <ul className='nav nav-tabs'>
    <li className='nav-item'>
      <a href='/galaxyMap'
          onClick={() => setActivePage('galaxyMap')}
          className= {activePage === 'galaxyMap' ? 'nav-link active' : 'nav-link'}
          >Galaxy Map</a>
    </li>
    <li className='nav-item'>
      <a href='/voyages'
          onClick={() => setActivePage('voyages')}
          className= {activePage === 'galaxyMap' ? 'nav-link active' : 'nav-link'}
          >Voyages</a>
    </li>
    <button>
      logout 
    </button>

  </ul>

    </Container>    
  );
}

export default Navigation;