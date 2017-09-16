import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { LinkSection } from '../LinkSection';

// Tests for Language Section
/*
1. basic render
2. snapshot
3. input form or added websites are shown based on state
4. five input fields are rendered
5. submit button is rendered
6. addingLinks() is triggered after mounting
7. handleSubmit() is triggered after submit
*/

describe('LinkSection - Basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LinkSection />, div);
  });

  it('LinkSection matches its shallow snapshot', () => {
    const wrapper = shallow(<LinkSection />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('LinkSection form OR added websites are shown based on state.show', () => {
    const wrapper = mount(<LinkSection />);
    wrapper.setState({ show: 'true' });
    expect(wrapper.find('form').props().style.display).toBe('block');
    expect(wrapper.find('.addedLinks').props().style.display).toBe('none');
  });

  it('LinkSection renders five input fields', () => {
    const wrapper = shallow(<LinkSection />);
    expect(wrapper.find('.form-group').length).toBe(5);
  });

  it('Should have submit button', () => {
    const wrapper = shallow(<LinkSection />);
    expect(wrapper.find('.btn').text()).toContain('Save');
  });
});

describe('LinkSection - test suite for functionality', () => {
  it('addingLinks() is triggered after mounting', () => {
    const spyHandler = jest.fn();
    LinkSection.prototype.addingLinks = spyHandler;
    mount(<LinkSection />);
    expect(spyHandler).toBeCalled();
  });

  it('handleSubmit() is called when form is submitted', () => {
    const spyHandler = jest.fn();
    LinkSection.prototype.handleSubmit = spyHandler;
    const wrapper = mount(<LinkSection />);
    wrapper.find('form').simulate('submit');
    expect(spyHandler).toBeCalled();
  });
});
