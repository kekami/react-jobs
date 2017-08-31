import React from 'react';
import { SkillSection } from './SkillSection';
import { LangSection } from './LangSection';
import { LinkSection } from './LinkSection';
import { WorkExperience } from './WorkExperience';
import { Education } from './Education';
import { AboutMe } from './AboutMe';
import { ProfileNav } from './ProfileNav';
import { ProfileWrapper, ProfileContainer, ProgressBar } from './styles';


export function Profile() {
  return (
    <ProfileWrapper>
      <ProfileContainer>
        <ProfileNav />
        <ProgressBar>
          <span>Here we will drop avatar and some paragraph copied from Jobbatical</span>
        </ProgressBar>
        <AboutMe />
        <SkillSection />
        <LangSection />
        <LinkSection />
        <WorkExperience />
        <Education />
      </ProfileContainer>
    </ProfileWrapper>
  );
}
