import React, { useState, useEffect, StrictMode } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom';
import AuthService from './utils/auth'; 

import background1 from "./assets/images/landingpage.png"; 
import background2 from "./assets/images/background1.png"; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.loggedIn());

  useEffect(() => {
    document.title = "Celestial Voyages";

    const updateLoginStatus = () => setIsLoggedIn(AuthService.loggedIn());

    window.addEventListener('storage', updateLoginStatus);

    return () => {
      window.removeEventListener('storage', updateLoginStatus);
    };
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${isLoggedIn ? background2 : background1})`,
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <StrictMode>
        <Outlet />
      </StrictMode>
    </div>
  );
}

export default App;
