import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
//import Home from './components/layout/Home';
import ProfilePage from './components/layout/ProfilePage';
import './components/assets/fontAwesome/css/font-awesome.min.css';

const App = () => (
  <Router>
    <Route exact path="/" component={ProfilePage} />
  </Router>
);

export default App;
