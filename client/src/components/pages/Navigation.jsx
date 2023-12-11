import {React, useState} from 'react';

import {Container, Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AuthService from '../../utils/auth.js';

const LogoutForm = ({ onLogout }) => {
  const [validated, setValidated] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      await AuthService.logout();
      if (onLogout) {
        onLogout();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className='logout-container'>
      <form noValidate  onSubmit={handleFormSubmit}>
       
        <button type="submit">Logout</button>
      </form>
    </Container>
  );
};

function Navigation({ activePage, setActivePage }) {
  return (
    <Container>
      <Row className="justify-content-between">
        <Col xs="auto">
          <LogoutForm />
        </Col>

        <Col xs="auto">
          <ul className='nav nav-tabs'>
            <li className='nav-item'>
              <a href='/galaxyMap'
                  onClick={() => setActivePage('galaxyMap')}
                  className={activePage === 'galaxyMap' ? 'nav-link active' : 'nav-link'}>
                  Galaxy Map
              </a>
            </li>
            <li className='nav-item'>
              <a href='/voyages'
                  onClick={() => setActivePage('voyages')}
                  className={activePage === 'voyages' ? 'nav-link active' : 'nav-link'}>
                  Voyages
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>    
  );
}

export default Navigation;