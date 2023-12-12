// use this to decode a token and get the user's information out of it
import * as decode from 'jwt-decode';

class AuthService {
  // get user data
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); 
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/voyages');
  }

  logout(idToken) {
    localStorage.removeItem('id_token', idToken);
    window.location.assign('/');
  }

  withAuth() {
    const token = this.getToken();
    return {
      headers: {
        'Content-Type': 'application/json',
        authorization: token ? `Bearer ${token}` : ''
      }
    };
  }
}

export default new AuthService();