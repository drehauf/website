import React, { useState, createContext, useContext } from 'react';
import api from '../utils/API';

export const Context = createContext({
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {},
});

const Authentication = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [_, setUser] = useState();

  // eslint-disable-next-line no-unused-vars
  const onLogin = (newUser, callback) => {
    api.post('/users/login', {
      username: newUser.username,
      password: newUser.password,
    })
      .then(() => {
        setAuthenticated(true);
        setUser(newUser);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('fatal: Endpoint `/users/login` is not implemented', error);
      });
  };

  const onLogout = () => {
    setAuthenticated(false);
    setUser(undefined);
  };

  return (
    <Context.Provider
      value={
        {
          isAuthenticated,
          loginUser: onLogin,
          logoutUser: onLogout,
        }
      }
    >
      {children}
    </Context.Provider>
  );
};

export const useAuthentication = () => useContext(Context);
export default Authentication;
