import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './components/layout/Home';
import './components/assets/fontAwesome/css/font-awesome.min.css';

const App = () => (
  <div>
    <link href="https://fonts.googleapis.com/css?family=Days+One|Khula" rel="stylesheet" />

    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </div>
);

export default App;
