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

  it('Sitemap passes correctly shallow test', () => {
    const wrapper = shallow(<Sitemap />);
  });

  it('Sitemap matches its shallow snapshot', () => {
    const wrapper = shallow(<Sitemap />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Sitemap matches its Full DOM snapshot', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Sitemap />
      </MemoryRouter>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
