import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import { ProfileNav } from '../ProfileNav';

// Tests for Profile Navigation Section
/*
1. basic render
2. snapshot
3. one nav is rendered
4. two list items are rendered
*/

describe('ProfileNav - basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <ProfileNav />
      </MemoryRouter>, div);
  });

  it('ProfileNav matches its shallow snapshot', () => {
    const wrapper = shallow(<ProfileNav />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('ProfileNav should render one nav item', () => {
    const wrapper = shallow(<ProfileNav />);
    expect(wrapper.find('nav').length).toBe(1);
  });

  it('ProfileNav renders two navigation options', () => {
    const wrapper = shallow(<ProfileNav />);
    expect(wrapper.find('li').length).toBe(2);
  });
});
