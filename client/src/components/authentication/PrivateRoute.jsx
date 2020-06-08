import React from 'react';
import { useAuthContext } from 'components/authentication/Authentication';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, component: Component, ...props }) => {

  const { isAuthenticated } = useAuthContext();

  return (
    <Route path={path}>
      {
        () => isAuthenticated ? <Component {...props}/> : <Redirect to='/login'/>
      }
    </Route>
  );
};

export default PrivateRoute;