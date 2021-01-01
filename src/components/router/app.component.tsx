import React, { FC as Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Main from '../main/main.component';
import Legal from '../main/legal.component';
import Privacy from '../main/privacy.component';
import Dashboard from '../private/dashboard/dashboard.component';
import Login from './login.component';
import PrivateRoute from './private-route.component';
import Authentication from '../authentication/authentication.component';
import '../../stylesheets/index.scss';

const App: Component = () => (
  <Authentication>
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/impressum" component={Legal} />
        <Route path="/datenschutz" component={Privacy} />
        <Route path="/home" component={Main} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  </Authentication>
);

export default App;
