import React from 'react';
import { AuthenticationContext } from 'components/authentication/Authentication';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, component: Component, ...props }) => {

  return (
    <Route path={path}>
      <AuthenticationContext.Consumer>
        {
          (value) => value.isAuthenticated
            ? <Component {...props} />
            : <Redirect to='/login' />
        }
      </AuthenticationContext.Consumer>
    </Route>
  );
};

export default PrivateRoute;