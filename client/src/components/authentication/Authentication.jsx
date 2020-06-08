import React, { useState, createContext, useContext } from 'react';
import api from 'components/utils/API';

export const AuthenticationContext = createContext({
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {}
});

const Authentication = ({ children }) => {

  const [ isAuthenticated, setAuthenticated ] = useState(false);
  const [ user, setUser ] = useState();

  const onLogin = (user, callback) => {    
    api.post('/users/login', {
      username: user.username,
      password: user.password    
    })
      .then((result) => {
        setAuthenticated(true);
        setUser(user);
      })
      .catch((error) => {
        callback(error.response.data);
      });
  }

  const onLogout = () => {
    setAuthenticated(false);
    setUser(undefined);
  }

  return (
    <AuthenticationContext.Provider
      value={
        {
          isAuthenticated: isAuthenticated,
          loginUser: onLogin,
          logoutUser: onLogout
        }
      }
    >
      {children}
    </AuthenticationContext.Provider>
  )
};

export const useAuthContext = () => useContext(AuthenticationContext);
export default Authentication;