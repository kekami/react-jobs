import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './components/layout/Home';
import Job from './components/layout/Job';
import './components/assets/fontAwesome/css/font-awesome.min.css';

// {home} route changed to path for the purposes of development

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Job} />
      <Route path="/Job" component={Job} />
    </div>
  </Router>
);

export default App;
