import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import { Profile } from '../Profile';

// Tests for Profile Section
/*
1. basic render
2. snapshot
*/

describe('Profile component - basic test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>, div);
  });

  it('Profile component matches its shallow snapshot', () => {
    const wrapper = shallow(<Profile />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
