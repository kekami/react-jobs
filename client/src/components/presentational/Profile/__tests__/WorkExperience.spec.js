import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { WorkExperience } from '../WorkExperience';

// Tests for Language Section
/*
1. basic render
2. snapshot
3. input form or added websites are shown based on state
4. four input fields are rendered for every WorkXP instance
5. submit button is rendered
6. handleSubmit() is triggered after mounting
*/

describe('WorkExperience - Basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WorkExperience />, div);
  });

  it('WorkExperience matches its shallow snapshot', () => {
    const wrapper = shallow(<WorkExperience />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('WorkExperience form is shown based on state.show', () => {
    const wrapper = mount(<WorkExperience />);
    wrapper.setState({ show: 'true' });
    expect(wrapper.find('form').props().style.display).toBe('block');
  });

  it('WorkExperience renders input fields based on the state - number of work experiences', () => {
    const wrapper = shallow(<WorkExperience />);
    wrapper.setState({ inputs: [1] });
    expect(wrapper.find('.form-group').length).toBe(4);
  });

  it('Should have submit button', () => {
    const wrapper = shallow(<WorkExperience />);
    expect(wrapper.find('.btn').text()).toContain('Save');
  });
});

describe('WorkExperience - test suite for functionality', () => {
  it('handleSubmit() is called when form is submitted', () => {
    const spyHandler = jest.fn();
    WorkExperience.prototype.handleSubmit = spyHandler;
    const wrapper = mount(<WorkExperience />);
    wrapper.find('form').simulate('submit');
    expect(spyHandler).toBeCalled();
  });
});
