import React, {useState} from "react";
import { Row, Container, } from 'react-bootstrap';

import { useEffect } from "react";

import SignUpForm from '../SignupForm';
import LoginForm from '../LoginForm';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log('handleLogin called');
        setLoggedIn(true);
        navigate('/galaxyMap');
    };
    return (
        <>
    <Container id="headerContainer">
    <Row className="flex" >
        <header className="flex-row mt-100">
            <div>
            <h1 >Welcome to Celestial Voyages!</h1>
            </div>
            <div id="forms">
            <LoginForm id="loginForm" onLogin={handleLogin}/>
            <SignUpForm id="signupForm"/>
            </div>
        </header>
    </Row>
    </Container>
    <Container id="pTag">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis perferendis harum, delectus nam deserunt molestiae voluptates reiciendis fuga eaque dolorem eius error porro sint itaque eos, earum qui beatae.
        </p>
    </Container>
        

        </>
    )
};

export default LandingPage;