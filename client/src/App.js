import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

//import Home from './components/layout/Home';
import ProfilePage from './components/layout/ProfilePage';
import Home from './components/layout/Home';
import Job from './components/layout/Job';
import JobsView from './components/layout/JobsView';
import './components/assets/fontAwesome/css/font-awesome.min.css';


const App = () => (
  <Router>
    

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/jobs" component={JobsView} />
      <Route path="/Job" component={Job} />
      <Route exact path="/profile" component={ProfilePage} />
    </Switch>
  </Router>
);

export default App;
