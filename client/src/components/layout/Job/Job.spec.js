import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Job from './Job';

// There is an error related to the Link components of the Navbar

it('renders without crashing', () => {
  const location = { hash: '555' };
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <MemoryRouter>
        <Job location={location} />
      </MemoryRouter>
    ), div);
});

