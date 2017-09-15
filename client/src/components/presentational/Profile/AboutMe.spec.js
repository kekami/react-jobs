import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { AboutMe } from './AboutMe';
import { Edit } from './styles';


describe('Sitemap Component', () => {
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

  it('Extracts data from the state - here: Location', () => {
    const wrapper = mount(<AboutMe />);
    wrapper.setState({ Location: 'Warsaw' });
    expect(wrapper.containsMatchingElement(<p id="place">Warsaw</p>)).toBe(true);
  });

  it('should render with the correct styles', () => {
    const tree = renderer.create(<Edit />).toJSON();
    expect(tree).toHaveStyleRule('color', '#04d092');
  });
});

describe('Checking fun fun function', () => {
  let component;
  const clickSpy = jest.fn();
  const props = {
    onSubmit: clickSpy,
  };
  // test checking if handlechange() is called when submitted the form
  // there is a prop existent but I can't make it to trigger anything
  // also passed jest.fn() in expect(clickSpy).toHaveBeenCalled(); is not being read
  it('should call onSubmit when button is clicked', () => {
    // handleSubmit = jest.fn();
    component = mount(<AboutMe {...props} />);
    expect(component.find('form').props().onSubmit).toBeDefined();// this is true, there is props onSubmit found in form element.
    // expect(mockFunction).not.toHaveBeenCalled();
    // 1: mock submitting a form
    // wrapper.find('form').simulate('submit');
    // 
    // 2: check if handleSubmit was called
    component.find('form').simulate('submit', { preventDefault: () => {} });
    expect(clickSpy).toHaveBeenCalled();
  });
});
