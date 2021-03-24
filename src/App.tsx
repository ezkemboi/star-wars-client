import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';

import Home from './home';
import Person from './people';

const App = () => {
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
      </Switch>
    </Router>
  )
}

export default App;
