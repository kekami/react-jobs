import React from 'react';  
import ReactDOM from 'react-dom';  
import { Education } from './Education';

it('renders without crashing', () => {  
  const div = document.createElement('div');
  ReactDOM.render(<Education />, div);
});
