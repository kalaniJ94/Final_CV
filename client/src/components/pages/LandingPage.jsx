import React from "react";
import { Navbar, Row, Col, Nav, Container, Modal, Tab } from 'react-bootstrap';

import SignUpForm from '../SignupForm';
import LoginForm from '../LoginForm';

import Auth from '../../utils/auth.js';


function LandingPage() {
    return (
        <>
    <Container id="headerContainer">
    <Row className="flex" >
        <header className="flex-row mt-100">
            <h1 >Welcome to Celestial Voyages!</h1>
        </header>
    </Row>
    </Container>
    <Container >
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis perferendis harum, delectus nam deserunt molestiae voluptates reiciendis fuga eaque dolorem eius error porro sint itaque eos, earum qui beatae.
        </p>
    </Container>
        

        </>
    )
}

export default LandingPage;