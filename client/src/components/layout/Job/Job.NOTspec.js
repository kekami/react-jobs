import React from 'react';
import ReactDOM from 'react-dom';
import Job from './Job';

// There is an error related to the Link components of the Navbar

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Job />, div);
});

