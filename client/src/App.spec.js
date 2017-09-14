import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('axios');
const axios = require('axios');

axios.mockImplementation(() => new Promise(() => {}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
