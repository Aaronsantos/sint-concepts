import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route key="test" component={Home} path="/" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
