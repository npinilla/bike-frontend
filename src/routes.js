import React from 'react';
import { Home } from './views/Home';
import { StationList } from './views/StationList';
import { NoMatch } from './views/NoMatch';
import { NavBar } from './components/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Stations" component={StationList} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
