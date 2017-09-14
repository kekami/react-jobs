import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { AboutMe } from './AboutMe';
import { AboutMeBody } from './styles';


describe('Sitemap Component', () => {
  it('renders without crashing', () => {  
    const div = document.createElement('div');
    ReactDOM.render(<AboutMe />, div);
  });
  // this test is redundant - if the smoke test fails this one will fail too.
  it('AboutMe passes correctly shallow test', () => {
    shallow(<AboutMe />);
  });

  it('AboutMe matches its shallow snapshot', () => {
    const wrapper = shallow(<AboutMe />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('AboutMe form matches its Full DOM snapshot', () => {
    const wrapper = mount(<AboutMe />);
    expect(toJson(wrapper.find('form'))).toMatchSnapshot();
  });

  it('Shows the input form to the user when "edit" is clicked', () => {
    const wrapper = mount(<AboutMe />);
    wrapper.setState({ show: true });
    expect(wrapper.find('form').props().style.display).toBe('block');
  });

  it('Input form renders 4 input fields', () => {
    const wrapper = shallow(<AboutMe />);
    expect(wrapper.find('.form-group').length).toBe(4);
  });

  it('Should have a submit button', () => {
    const wrapper = shallow(<AboutMe />);
    expect(wrapper.find('.btn').exists()).toBe(true);
  });

  it('Extracts data from the state', () => {
    const wrapper = mount(<AboutMe />);
    wrapper.setState({ Location: 'Warsaw' });
    expect(wrapper.containsMatchingElement(<p id="location">Warsaw</p>)).toBe(true);
  });
});
