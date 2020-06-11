import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from 'ScrollToTop';
import Public from 'components/main/Public';
import Legal from 'components/footer/Legal';
import Privacy from 'components/footer/Privacy';
import { Login, PrivateRoute } from 'components/authentication';
import Authentication from 'components/authentication/Authentication';
import './stylesheets/index.scss';
import Private from 'components/main/Private';

const App = () => {

  return (
    <Authentication>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path='/dashboard' component={Private} />
          <Route path="/impressum" component={Legal} />
          <Route path="/datenschutz" component={Privacy} />
          <Route path="/home" component={Public} />
          <Route path="/" component={Public} />
        </Switch>
      </Router>
    </Authentication>
  );
}

export default App;