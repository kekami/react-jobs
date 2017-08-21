import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Hero } from './Hero';

test('Hero renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hero />, div);
});

test('Hero component matches standard output', () => {
  const component = shallow(<Hero />);
  expect(component).toMatchSnapshot();
});
