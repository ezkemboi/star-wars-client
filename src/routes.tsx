import React from 'react';
import {
  Route, 
  BrowserRouter as Router, 
  Switch
} from 'react-router-dom';

import Home from './containers/home';
import Person from './containers/people';
import HomeWorld from './containers/homeworld';

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
          component={Person} 
        />
        <Route 
          path='/homeworld' 
          exact 
          component={HomeWorld} 
        />
      </Switch>
    </Router>
  )
}

export default Routes;
