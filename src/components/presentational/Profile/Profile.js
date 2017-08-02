import React from 'react';
// import { Link } from 'react-router-dom';
import { ProfileWrapper, ProfileContainer, ProfileNav, ProgressBar, SectionBox, SectionHead, Link, SectionWrap, Description } from './styles.js';

const sections = [
  { Title: 'About', Desc: 'About you' },
  { Title: 'Skills', Desc: 'diff skills' },
  { Title: 'Language skills', Desc: 'My languages & proficiency levels' },
  { Title: 'Links', Desc: 'My social media & homepage links' },
  { Title: 'Work Experience', Desc: 'Previous & current positions' },
  { Title: 'Education', Desc: 'Schools & courses' },
];


export function Profile() {
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

        <ProfileSections sections={sections} />
      </ProfileContainer>
    </ProfileWrapper>
  );
}

const ProfileSections = ({ sections }) => {
  const sectionsJSX = sections.map(section => (
    <SectionBox>
      <SectionHead>
        <strong>{section.Title}</strong>
        <Description>
          {section.Desc}
        </Description>
      </SectionHead>
    </SectionBox>
  ));

  return (
    <SectionWrap>
      {sectionsJSX}
    </SectionWrap>
  );
};
