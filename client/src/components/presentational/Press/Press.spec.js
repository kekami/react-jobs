import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Press, LogoTags } from './Press';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Press />, div);
});

test('Press component matches standard output', () => {
  const component = shallow(<Press />);
  expect(component).toMatchSnapshot();
});

test('LogoTags object returns lookup table', () => {
  expect(LogoTags).toMatchObject(expect.objectContaining({
    1: expect.anything(),
    2: expect.anything(),
  }));
});
