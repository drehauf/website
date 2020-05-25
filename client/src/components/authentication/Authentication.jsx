import React, { useState, createContext } from 'react';
import axios from 'axios';

export const AuthenticationContext = createContext({
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {}
});

const Authentication = (props) => {

  const [ isAuthenticated, setAuthenticated ] = useState(false);
  const [ user, setUser ] = useState();

  const onLogin = (user) => {
    axios.post('/api/users/login', {
      username: user.username,
      password: user.password
    })
      .then((result) => {
        console.log(result);
        setAuthenticated(true);
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
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
      {props.children}
    </AuthenticationContext.Provider>
  )
};

export default Authentication;