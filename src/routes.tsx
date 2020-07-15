import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import HeroDetails from './pages/HeroDetails';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/hero-details" component={HeroDetails} />
    </Switch>
  );
};

export default Routes;
