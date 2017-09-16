import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SkillSection } from '../SkillSection';

// Tests for Skills Section
/*
1. basic render
2. Snapshot
3. input field is rendered
4. addingTags() is triggered after mounting
5. handleSubmit() is triggered after submit
*/
describe('LangSection - basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SkillSection />, div);
  });

  it('AboutMe matches its shallow snapshot', () => {
    const wrapper = shallow(<SkillSection />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Input form renders 4 input fields', () => {
    const wrapper = shallow(<SkillSection />);
    expect(wrapper.find('input').length).toBe(1);
  });
});

describe('LangSection - test suite for functionality', () => {
  it('addingTags() is called and watches for newly added tags', () => {
    const spyHandler = jest.fn();
    SkillSection.prototype.addingTags = spyHandler;
    mount(<SkillSection />);
    expect(spyHandler).toBeCalled();
  });

  it('handleSubmit() is called when form is submitted', () => {
    // create instance of mock
    const spyHandler = jest.fn();
    // overwrite the handleSubmit function with reference to spyHandler (mock instance)
    SkillSection.prototype.handleSubmit = spyHandler;
    // mount component and find form element
    const wrapper = mount(<SkillSection />);
    const form = wrapper.find('form');
    // mock submitting a form
    form.simulate('submit');
    // check if handleSubmit was called
    expect(spyHandler).toBeCalled();
  });
});
