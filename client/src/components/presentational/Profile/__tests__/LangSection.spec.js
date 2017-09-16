import React from 'react';  
import ReactDOM from 'react-dom';  
import { LangSection } from '../LangSection';

it('renders without crashing', () => {  
  const div = document.createElement('div');
  ReactDOM.render(<LangSection />, div);
});
