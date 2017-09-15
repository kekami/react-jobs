import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { spy } from 'sinon';
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
  // test checking if handlechange() is called when submitted the form
  it('should call onSubmit when button is clicked', () => {
    const wrapper = mount(<AboutMe />);
    wrapper.handleSubmit = jest.fn();
    const form = wrapper.find('form');
    // 1: mock submitting a form
    // 2: check if handleSubmit was called
    form.simulate('submit', { preventDefault: () => {}, target: { value: 'Lukasz', name: 'FirstName' } });
    expect(wrapper.handleSubmit).toHaveBeenCalled();
  });

  it('should render with the correct styles', () => {
    const tree = renderer.create(<Edit />).toJSON();
    expect(tree).toHaveStyleRule('color', '#04d092');
  });
});
