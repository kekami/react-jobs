import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavWrapper } from './styles';

export class ProfileNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Profile: true,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    //this.setState({ Active: !this.state.Active });
  }

  render() {
    return (
      <NavWrapper>
        <nav>
          <ul>
            <li><Link to="/" onClick={this.onClick()}><strong>MY PROFILE</strong></Link></li>
            <li><Link to="/" onClick={this.onClick()}><strong>MY PREFERENCES</strong></Link></li>
          </ul>
        </nav>
      </NavWrapper>
    );
  }
}
