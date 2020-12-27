import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from "./flux/AppContainer.js";
import {HashRouter, Switch} from "react-router-dom";
import {createHashHistory} from "history";

const customHistory = createHashHistory();

ReactDOM.render(
  <HashRouter history = {customHistory}>
    <Switch>
      <AppContainer />
    </Switch>
  </HashRouter>
  ,
  document.getElementById('root')
);
