import React from 'react';
import {
  Route, 
  BrowserRouter as Router, 
  Switch
} from 'react-router-dom';

import Home from './containers/home';
import People from './containers/people';
import HomeWorld from './containers/homeworld';
import PageNotFound from './containers/page-not-found';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route 
          path='/' 
          exact 
          component={Home} 
        />
        <Route 
          path='/people' 
          exact 
          component={People} 
        />
        <Route 
          path='/homeworld' 
          exact 
          component={HomeWorld} 
        />
        <Route
          component={PageNotFound}
        />
      </Switch>
    </Router>
  )
}

export default Routes;
