import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Education } from '../Education';

// Tests for Language Section
/*
1. basic render
2. snapshot
3. input form or added websites are shown based on state
4. six input fields are rendered for every Education instance
5. submit button is rendered
6. handleSubmit() is triggered after mounting
*/

describe('Education - Basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Education />, div);
  });

  it('Education matches its shallow snapshot', () => {
    const wrapper = shallow(<Education />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Education form is shown based on state.show', () => {
    const wrapper = mount(<Education />);
    wrapper.setState({ show: 'true' });
    expect(wrapper.find('form').props().style.display).toBe('block');
  });

  it('Education renders input fields based on the state - number of education instances', () => {
    const wrapper = shallow(<Education />);
    wrapper.setState({ inputs: [1] });
    expect(wrapper.find('.form-group').length).toBe(5);
  });

  it('Should have submit button', () => {
    const wrapper = shallow(<Education />);
    expect(wrapper.find('.btn').text()).toContain('Save');
  });
});

describe('Education - test suite for functionality', () => {
  it('handleSubmit() is called when form is submitted', () => {
    const spyHandler = jest.fn();
    Education.prototype.handleSubmit = spyHandler;
    const wrapper = mount(<Education />);
    wrapper.find('form').simulate('submit');
    expect(spyHandler).toBeCalled();
  });
});
