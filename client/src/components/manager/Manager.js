import React, { useState, useEffect, createContext } from 'react';

export const ManagerContext = createContext({
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {}
});

const Manager = (props) => {

  const [ isAuthenticated, setAuthenticated ] = useState(false);
  const [ user, setUser ] = useState();

  useEffect(() => {
    console.log(user, isAuthenticated ? 'logged in' : 'logged out');
  }, [isAuthenticated]);

  const onLogin = (user) => {
    console.log('login');
    setAuthenticated(true);
    setUser(user);
  }

  const onLogout = (user) => {
    setAuthenticated(false);
    setUser(undefined);
  }

  return (
    <ManagerContext.Provider
      value={
        {
          isAuthenticated: isAuthenticated,
          loginUser: onLogin,
          logoutUser: onLogout
        }
      }
    >
    {props.children}
    </ManagerContext.Provider>
  )
};

export default Manager;