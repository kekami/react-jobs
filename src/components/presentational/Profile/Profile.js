import React from 'react';
import { SkillSection } from './SkillSection';
import { LangSection } from './LangSection';
import { LinkSection } from './LinkSection';
import { WorkExperience } from './WorkExperience';
import { Education } from './Education';
import { AboutMe } from './AboutMe';
import { ProfileNav } from './ProfileNav';
import { AvatarAndProgress } from './AvatarAndProgress';
import { ProfileWrapper, ProfileContainer } from './styles';


export function Profile() {
  return (
    <ProfileWrapper>
      <ProfileContainer>
        <ProfileNav />
        <AvatarAndProgress />
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
