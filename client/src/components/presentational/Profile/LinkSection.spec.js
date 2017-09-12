import React from 'react';  
import ReactDOM from 'react-dom';  
import { LinkSection } from './LinkSection';

it('renders without crashing', () => {  
  const div = document.createElement('div');
  ReactDOM.render(<LinkSection />, div);
});
