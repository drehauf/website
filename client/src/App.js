import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from 'ScrollToTop';
import Main from 'components/main/Main';
import Legal from 'components/footer/Legal';
import Privacy from 'components/footer/Privacy';
import Dashboard from 'components/dashboard/Dashboard';
import { Login, PrivateRoute } from 'components/authentification';
import './stylesheets/index.scss';

const App = () => {

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path="/impressum" component={Legal} />
        <Route path="/datenschutz" component={Privacy} />
        <Route path="/home" component={Main} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;