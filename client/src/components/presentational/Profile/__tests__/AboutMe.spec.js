import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { AboutMe } from '../AboutMe';
import { Edit } from '../styles';

/* Tests for AboutMe Section
here you can find 3 suites testing: functionality, styles and general rendering

1. basic render
2. shallow render - redundat
3. snapshot of shallow render
4. snapshot of FullDOM render
5. input form is shown based on state
6. four input fields are rendered
7. submit button is rendered
8. edit button has proper color
9. handleSubmit() is triggered after submit
10. element(s) of AboutMeBody extract content form state
*/

describe('AboutMe - Basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AboutMe />, div);
  });
  // this test is redundant - if the smoke test fails this one will fail too.
  it('AboutMe passes correctly shallow test', () => {
    shallow(<AboutMe />);
  });
  // shallow snapshot - only 1 level 'deep' into the component
  it('AboutMe matches its shallow snapshot', () => {
    const wrapper = shallow(<AboutMe />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  // FullDOM render - snapshot of the whole 'tree' of the component
  it('AboutMe form matches its Full DOM snapshot', () => {
    const wrapper = mount(<AboutMe />);
    expect(toJson(wrapper.find('form'))).toMatchSnapshot();
  });
  // display of input form reacts depends on the component's state
  it('Shows the input form based on the state.show', () => {
    const wrapper = mount(<AboutMe />);
    wrapper.setState({ show: true });
    expect(wrapper.find('form').props().style.display).toBe('block');
  });
  // User is able to give his details in 4 input fields
  it('Input form renders 4 input fields', () => {
    const wrapper = shallow(<AboutMe />);
    expect(wrapper.find('.form-group').length).toBe(4);
  });
  // User sees the button to submit his details
  it('Should have a submit button', () => {
    const wrapper = shallow(<AboutMe />);
    expect(wrapper.find('.btn').exists()).toBe(true);
  });
});

describe('AboutMe - test suite for styles', () => {
  // Edit button has to conform to general style of the component
  it('Edit button renders with the correct color', () => {
    const editButton = renderer.create(<Edit />).toJSON();
    expect(editButton).toHaveStyleRule('color', '#04d092');
  });
});

describe('AboutMe - test suite for functionality', () => {
  // Function responsible for transfer of information into the state is called upon submission
  it('handleSubmit() is called when form is submitted', () => {
    // create instance of mock
    const spyHandler = jest.fn();
    // overwrite the handleSubmit function with reference to spyHandler (mock instance)
    AboutMe.prototype.handleSubmit = spyHandler;
    // mount component and find form element
    const wrapper = mount(<AboutMe />);
    const form = wrapper.find('form');
    // mock submitting a form
    form.simulate('submit');
    // check if handleSubmit was called
    expect(spyHandler).toBeCalled();
  });
  // Elements of the AboutMe section display information based on state
  it('Element extracts content from the state, here: Location', () => {
    const wrapper = mount(<AboutMe />);
    wrapper.setState({ Location: 'Warsaw' });
    expect(wrapper.containsMatchingElement(<p id="place">Warsaw</p>)).toBe(true);
  });
});
