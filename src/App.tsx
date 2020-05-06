import React from 'react';
import './App.scss';
import { Switch, Route, Router } from 'react-router';
import { createBrowserHistory } from "history";

import Home from './views/Home/index';
import NotFound from './views/NotFound/index';

import './mock/demoData';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route component={NotFound}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
