import React from 'react';
import Manager, { ManagerContext } from 'components/manager/Manager';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, component: Component, ...props }) => {

  return (
    <Route path={path}>
      <ManagerContext.Consumer>
        {
          (value) => value.isAuthenticated
            ? <Component {...props} />
            : <Redirect to='/login' />
        }
      </ManagerContext.Consumer>
    </Route>
  );
};

export default PrivateRoute;