import React, { Component } from 'react';
import { NavWrapper } from './styles';

export class AvatarAndProgress extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {

  }

  render() {
    return (
      <NavWrapper>
        <div>Avatar will be here</div>
        <div>Here you will be able to change your avatar</div>
        <div>Here you will see % completion bar</div>
        <div>
          <p>This is your profile that will represent you when you apply for jobs on Jobbatical. By submitting an application, you will make your profile visible to the company you’re applying to. Note that changes made here will also affect previously submitted applications.</p>
        </div>
      </NavWrapper>
    );
  }
}
