import React from 'react';
import ReactDOM from 'react-dom';
import { Press, LogoTags } from './Press';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Press />, div);
});

test('LogoTags object returns lookup table', () => {
  expect(LogoTags).toMatchObject(expect.objectContaining({
    1: expect.anything(),
    2: expect.anything(),
  }));
});

