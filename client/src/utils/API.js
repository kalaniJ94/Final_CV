//beginning of routes to ensure login/signup functionality
//needed?
export const getMe = (token) => {
    return fetch('/api/profile/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
//signup
  export const createUser = (userData) => {
    return fetch('/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  //login
  export const loginUser = (userData) => {
    return fetch('/api/profile/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };