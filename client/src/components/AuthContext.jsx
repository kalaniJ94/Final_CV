
import { createContext, useContext, useState } from 'react';

import AuthService from '../utils/auth.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(getInitialAuthData());

  function getInitialAuthData() {
    // Implement logic to get initial authentication state from the stored JWT
    const token = localStorage.getItem('token');
    const user = AuthService.getToken(token);
    const isLoggedIn = !!token && !!user;
    return { token, user, isLoggedIn };
  }

  const login = (token) => {
    const user = AuthService.getToken(token);
    setAuthData({ token, user, isLoggedIn: true });
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setAuthData({ token: null, user: null, isLoggedIn: false });
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ ...authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};