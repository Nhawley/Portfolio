import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Four04 from './404';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/:section?" component={Home} />
      <Route component={Four04} />
    </Switch>
  </BrowserRouter>
);