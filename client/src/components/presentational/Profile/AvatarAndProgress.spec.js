import React from 'react';  
import ReactDOM from 'react-dom';  
import { AvatarAndProgress } from './AvatarAndProgress';

it('renders without crashing', () => {  
  const div = document.createElement('div');
  ReactDOM.render(<AvatarAndProgress />, div);
});
