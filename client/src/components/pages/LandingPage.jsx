import React, { useState } from "react";
import { Row, Container, Button } from "react-bootstrap";

import logo from "../../assets/images/logo.png";
import SignUpForm from "../SignupForm";
import LoginForm from "../LoginForm";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [showForms, setShowForms] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("handleLogin called");
    setLoggedIn(true);
    navigate("/galaxyMap");
  };

  const toggleForms = () => {
    setShowForms(!showForms);
  };

  return (
    <>
      <Container id="headerContainer">
        <Row className="flex">
          <header className="flex-row mt-100">
            <div>
              <h1 className="landingHeader">Welcome to Celestial Voyages!</h1>
            <img
                className="logoStyle"
                src={logo}
                alt="Celestial Voyages logo"
              />
            </div>
            
          </header>
          <Container id="pTag">
        <p>
        Welcome to Celestial Voyages, your portal to the cosmic wonders! Step into a realm where the boundaries of space and imagination merge, offering you an extraordinary opportunity to explore the universe. With Celestial Voyages, embark on a spectacular journey to distant galaxies, witness the majestic dance of planets, and marvel at the tapestry of stars that light up the endless night sky. Our state-of-the-art spacecraft and experienced cosmic guides ensure a safe and mesmerizing adventure tailored to your dreams. The universe is vast and full of wonders waiting to be explored. Join us at Celestial Voyages, where every journey is a step into the extraordinary. Your adventure among the stars starts now!
        </p>
      </Container>
        </Row>
        <div className="voyageButtonContainer">
          <Button className="beginVoyageBtn" onClick={toggleForms}>
            {isLoggedIn ? "Log Out" : "Begin Your Voyage"}
          </Button>
        </div>
      </Container>

      {showForms && (
        <Container id="formsContainer">
          <LoginForm id="loginForm" onLogin={handleLogin} />
          <SignUpForm id="signupForm" />
        </Container>
      )}

      
      
    </>
  );
};

export default LandingPage;
