import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavWrapper } from './styles';

export class ProfileNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myProfile: true,
      mySettings: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      myProfile: !this.state.myProfile,
      mySettings: !this.state.mySettings,
    });
  }

  render() {
    return (
      <NavWrapper>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={this.onClick}>
                <strong>MY PROFILE</strong>
              </Link>
            </li>
            <li>
              <Link to="/" onClick={this.onClick}>
                <strong>MY PREFERENCES</strong>
              </Link>
            </li>
          </ul>
        </nav>
      </NavWrapper>
    );
  }
}
