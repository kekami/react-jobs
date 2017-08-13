import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { ProfileWrapper, ProfileContainer, ProfileNav, ProgressBar, Link, SectionWrapper, First2, Inputform } from './styles';


export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: 'Skills',
      skillHold: 'Type in a skill and hit Enter',
      skillDesc: 'My most important skills',
      languages: 'Languages',
      langHold: 'Type in a language and hit Enter',
      langDesc: 'My languages',
      addSkill: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      addSkill: this.setState.inputValue,
    });
  }

  skillnlang(name, desc, hold) {
    return (
      <SectionWrapper>
        <First2>
          <div>
            <p><strong>{name}</strong> {desc}</p>
          </div>
          <Inputform onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={e => this.setState({ inputValue: e.target.value })}
              value={this.setState.inputValue}
              placeholder={hold}
            />
          </Inputform>
          {addTags()}
        </First2>
      </SectionWrapper>
    );
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
          {this.skillnlang(this.state.skills, this.state.skillDesc, this.state.skillHold)}
          {this.skillnlang(this.state.languages, this.state.langDesc, this.state.langHold)}
        </ProfileContainer>
      </ProfileWrapper>
    );
  }
}
