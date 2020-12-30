import React, { FC as Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Main from './components/main/Main';
import Legal from './components/footer/legal.component';
import Privacy from './components/footer/privacy.component';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/authentication/login.component';
import PrivateRoute from './components/authentication/private-route.component';
import Authentication from './components/authentication/authentication.component';
import './stylesheets/index.scss';

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
