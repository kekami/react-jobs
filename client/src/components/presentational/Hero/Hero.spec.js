import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Hero } from './Hero';

describe('Hero Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Hero />);
  });

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hero />, div);
  });

  it('Matches standard output', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Contains one article tag for the body', () => {
    console.log();
    expect(wrapper.find('div').length).toBe(1);
  });
});
