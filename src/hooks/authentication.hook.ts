import { createContext, useContext } from 'react';
import User from '../models/user.model';

interface AuthenticationContext {
  isAuthenticated: boolean;
  loginUser: (newUser: User, callback: Function) => void;
  logoutUser: () => void;
}

const Context = createContext<AuthenticationContext>({
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {},
});

export default Context;
export const useAuthentication = () => useContext(Context);
