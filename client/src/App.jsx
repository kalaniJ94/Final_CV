import React, { useState, useEffect, StrictMode } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom';

import { AuthProvider } from './components/AuthContext.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

  
  
import AuthService from './utils/auth'; 
import Footer from './components/pages/Footer';


import background1 from "./assets/images/landingpage.png"; 
import background2 from "./assets/images/background1.png"; 
import logo from "./assets/images/favicon.ico";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.loggedIn());

  useEffect(() => {
    document.title = 'Celestial Voyages';

    // adds the cute little icon to the tab in the browser
    const link = document.querySelector("link[rel~='icon']");
    if (!link) {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = logo;
      document.head.appendChild(newLink);
    } else {
      link.href = logo;
    }

    const updateLoginStatus = () => setIsLoggedIn(AuthService.loggedIn());

    window.addEventListener('storage', updateLoginStatus);

    return () => {
      window.removeEventListener('storage', updateLoginStatus);
    };
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${isLoggedIn ? background2 : background1})`,
    width: '100%',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    top: 0,
    left: 0,
    
  };

  return (
    <>
     <AuthProvider>
    <div id="app" style={backgroundStyle}>
      <StrictMode>
        <Outlet />
      </StrictMode>
      <Footer />
    </div>
   </AuthProvider>
    </>

  );
}

export default App;
