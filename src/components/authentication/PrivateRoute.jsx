import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthentication } from './Authentication';

const PrivateRoute = ({ path, component: RouteComponent, ...props }) => {
  const { isAuthenticated } = useAuthentication();

  const child = isAuthenticated ? <RouteComponent {...props} /> : <Redirect to="/login" />;

  return (
    <Route path={path}>
      { child }
    </Route>
  );
};

export default PrivateRoute;
