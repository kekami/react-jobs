import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { AvatarAndProgress } from '../AvatarAndProgress';
import { Avatar } from '../styles';


// Tests for Avatar and Progress bar section
/* 
1. basic render
2. snapshot
3. there is an avatar upload div
4. Percentage of progress bar is extracted from state
5. Avatar has specific style rules
*/

describe('Avatar&Progress - basic tests', () => {
  // basic smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AvatarAndProgress />, div);
  });
  // shallow snapshot - only 1 level 'deep' into the component
  it('Avatar&Progress matches its shallow snapshot', () => {
    const wrapper = shallow(<AvatarAndProgress />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Shows the uploader of user\'s avatar', () => {
    const wrapper = shallow(<AvatarAndProgress />);
    expect(wrapper.find('input').length).toBe(1);
  });
});

describe('Avatar&Progress - test suite for functionality', () => {
  it('Progress bar derives its width from component\'s state', () => {
    const wrapper = shallow(<AvatarAndProgress />);
    wrapper.setState({ width100: 50 });
    expect(wrapper.find('.progressBar').props().style.width).toBe('50%');
  });
});

describe('Avatar&Progress - test suite for styles', () => {
  it('Avatar is moved upwards on wide screens', () => {
    const avatar = renderer.create(<Avatar />).toJSON();
    expect(avatar).toHaveStyleRule('margin-top', '-140px', {
      media: '(min-width:1000px)',
    });
  });
});

