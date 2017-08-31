import React, { Component } from 'react';
import { NavWrapper } from './styles';

export class ProfileNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <NavWrapper>
        
      </NavWrapper>
    );
  }
}
