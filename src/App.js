import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from 'ScrollToTop';
import Main from 'components/main/Main';
import Legal from 'components/footer/Legal';
import Privacy from 'components/footer/Privacy';
import Dashboard from 'components/dashboard/Dashboard';
import './stylesheets/index.scss';

const App = () => {

  return (
    <Router>
      <Fragment>
        <ScrollToTop/>
        <Switch>
          <Route path="/login">
            <Dashboard/>
          </Route>
          <Route path="/impressum">
            <Legal/>
          </Route>
          <Route path="/datenschutz">
            <Privacy/>
          </Route>
          <Route path="/home">
            <Main/>
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;