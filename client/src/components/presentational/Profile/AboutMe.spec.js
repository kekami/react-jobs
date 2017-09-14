import React from 'react';  
import ReactDOM from 'react-dom';  
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { AboutMe } from './AboutMe';


describe('Sitemap Component', () => {
  it('renders without crashing', () => {  
    const div = document.createElement('div');
    ReactDOM.render(<AboutMe />, div);
  });

  it('AboutMe passes correctly shallow test', () => {
    shallow(<AboutMe />);
  });

  it('AboutMe matches its shallow snapshot', () => {
    const wrapper = shallow(<AboutMe />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('AboutMe matches its Full DOM snapshot', () => {
    const wrapper = mount(<AboutMe />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('AboutMe renders 4 input fields', () => {
    const wrapper = shallow(<AboutMe />);
    expect(wrapper.find('input').exists()).toBe(true);
  });
});
