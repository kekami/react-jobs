import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Hero } from './Hero';

describe('Hero Component tests.', () => {
  let wrapper;

  it('Renders without crashing.', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>, div);
  });

  describe('Detailed snapshot.', () => {
    beforeEach(() => {
      wrapper = shallow(<Hero />);
    });

    it('Matches standard output.', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Contains one Centered styled tag for the body.', () => {
      expect(wrapper.find('Centered').length).toBe(1);
    });

    it('Contains one Footer styled tag for the body.', () => {
      expect(wrapper.find('Footer').length).toBe(1);
    });
  });
});
