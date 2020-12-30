import React, { FC as Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthentication } from '../../hooks/authentication.hook';

interface Props {
  path: string;
  // This is a eslint error
  // eslint-disable-next-line no-undef
  component: () => JSX.Element;
}

const PrivateRoute: Component<Props> = ({ path, component: RouteComponent, ...props }: Props) => {
  const { isAuthenticated } = useAuthentication();

  const child = isAuthenticated ? <RouteComponent {...props} /> : <Redirect to="/login" />;

  return (
    <Route path={path}>
      { child }
    </Route>
  );
};

export default PrivateRoute;
