import React from 'react';  
import ReactDOM from 'react-dom';  
import { SkillSection } from './SkillSection';

it('renders without crashing', () => {  
  const div = document.createElement('div');
  ReactDOM.render(<SkillSection />, div);
});
