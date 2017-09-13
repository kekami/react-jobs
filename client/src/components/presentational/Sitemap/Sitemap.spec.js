import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Sitemap } from './Sitemap';


describe('Sitemap Component', () => {
  it('Sitemap (and children) renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Sitemap />
      </MemoryRouter>, div);
  });

  it('Sitemap renders correclty/ shallow test render', () => {
    const wrapper = shallow(<Sitemap />);
  });

  it('Sitemap matches its shallow snapshot', () => {
    const wrapper = shallow(<Sitemap />);
    expect(toJson(wrapper)).toMatchSnapshot()
  });
});
