import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './components/Main';
import Impressum from './components/Impressum/Impressum';
import Datenschutz from "./components/Datenschutz/Datenschutz";
import './stylesheets/index.scss';

const App = () => {

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/impressum">
            <Impressum />
          </Route>
          <Route path="/datenschutz">
            <Datenschutz />
          </Route>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;