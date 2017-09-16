import React from 'react';  
import ReactDOM from 'react-dom';  
import { MemoryRouter } from 'react-router-dom';
import { ProfileNav } from '../ProfileNav';

it('renders without crashing', () => {  
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <ProfileNav />
    </MemoryRouter>, div);
});
