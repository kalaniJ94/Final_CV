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
      <div className="landingPageContainer">
        <Container id="headerContainer ">
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
      </div>
    </>
  );
};

export default LandingPage;
