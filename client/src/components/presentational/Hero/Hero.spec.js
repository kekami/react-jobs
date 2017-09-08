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

  it('Contains one Centered styled tag for the body', () => {
    expect(wrapper.find('Centered').length).toBe(1);
  });

  it('Contains one Footer styled tag for the body', () => {
    expect(wrapper.find('Footer').length).toBe(1);
  });
});
