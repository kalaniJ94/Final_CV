import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navigation({ setActivePage, activePage }) {
  return (
    <Container>

  <Row>
    <nav>
      <ul>
        <Col>
        <li className={activePage === 'galaxyMap' ? 'active' : ''} onClick={() => setActivePage('galaxyMap')}>Galaxy Map</li>
        </Col>
        <Col>
        <li className={activePage === 'itinerary' ? 'active' : ''} onClick={() => setActivePage('itinerary')}> Your Itinerary</li>
        </Col>
        <Col>
        <li className={activePage === 'log' ? 'active' : ''} onClick={() => setActivePage('log')}>Login/Logoff</li>
        </Col>
      </ul>
    </nav>
</Row>
    </Container>    
  );
}

export default Navigation;