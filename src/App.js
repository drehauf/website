import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './components/Main';
import Legal from './components/footer/Legal';
import Privacy from "./components/footer/Privacy";
import './stylesheets/index.scss';

const App = () => {

  return (
    <Fragment>
      <Router>
        <Switch>
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
      </Router>
    </Fragment>
  );
}

export default App;