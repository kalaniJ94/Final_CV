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
        Welcome to Celestial Voyages, your portal to the cosmic wonders! The universe is vast and full of wonders waiting to be explored. Join us at Celestial Voyages, where every journey is a step into the extraordinary. Your adventure among the stars starts now!
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
