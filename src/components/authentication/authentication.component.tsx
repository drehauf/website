import React, { FC as Component, useState, ReactNode } from 'react';
import Context from './authentication.hook';
import api from '../utils/API';
import User from '../../models/user';

interface Props {
  children: ReactNode;
}

const Authentication: Component<Props> = ({ children }: Props) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [_, setUser] = useState<User | null>(null);

  /**
   * Login handler.
   * Create POST api request and set toggle `authenticated` if successful.
   * @param {User} newUser The new `User` to be saved
   * @param {Function} callback Completion handler
   */
  const onLogin = (newUser: User, callback: Function) => {
    api.post('/users/login', newUser)
      .then(() => {
        setAuthenticated(true);
        setUser(newUser);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('fatal: Endpoint `/users/login` is not implemented', error);
      });
  };

  /**
   * Logout handler.
   * Reset `authentication` and remove `user`
   */
  const onLogout = () => {
    setAuthenticated(false);
    setUser(null);
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

export default Authentication;
