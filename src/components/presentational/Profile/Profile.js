import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { ProfileWrapper, ProfileContainer, ProfileNav, ProgressBar, Link } from './styles.js';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: 'skill',
      languages: 'language',
    };
  }

  render() {
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
        </ProfileContainer>
      </ProfileWrapper>
    );
  }
}

export default Profile;
