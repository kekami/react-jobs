import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { ProfileWrapper, ProfileContainer, ProfileNav, ProgressBar, Link, First2 } from './styles.js';


export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: 'Skills',
      skillDesc: 'My most important skills',
      languages: 'Languages',
      langDesc: 'My languages',
    };
  }

  skillnlang(name, desc) {
    return (
    <First2>
      <div>
        <h1><strong>{name}</strong></h1>
        <p>{desc}</p>
      </div>

    </First2>);
  }

  render() {
    const Links = '';
    return (
      <ProfileWrapper>
        <ProfileContainer>
          <ProfileNav>
            <ul>
              <li><Link to="/">My Profile & CV</Link></li>
              <li><Link to="/">My Preferences</Link></li>
            </ul>
          </ProfileNav>
          <ProgressBar>
            <span>Here we will drop avatar and lift it up to cover space in between of 2 tabs</span>
          </ProgressBar>
          {this.skillnlang(this.state.skills, this.state.skillDesc)}
          {this.skillnlang(this.state.languages, this.state.langDesc)}
        </ProfileContainer>
      </ProfileWrapper>
    );
  }
}
