import React, { useState, useEffect, StrictMode } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom';
import AuthService from './utils/auth'; 
import Footer from './components/pages/Footer';

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
    backgroundRepeat: 'no-repeat',
    position: 'fixed',
    top: 0,
    left: 0,
    
  };

  return (
    <div style={backgroundStyle}>
      <StrictMode>
        <Outlet />
      </StrictMode>
      <Footer />
    </div>
  );
}

export default App;
