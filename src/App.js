import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './components/Main';
import Impressum from './components/Impressum';
import Datenschutz from "./components/Datenschutz";

const App = () => {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/impressum">
            <Impressum/>
          </Route>
          <Route path="/datenschutz">
            <Datenschutz/>
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;