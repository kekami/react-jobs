import React from 'react';
import { MissionContainer, MissionHeader, MissionContent, JoinButton } from './styles';

const Mission = () => (
  <MissionContainer>
    <MissionHeader>Our Mission</MissionHeader>
    <MissionContent>At Jobbatical we think beyond borders and help the world work together. Join our journey to build a borderless world where skills are valued over passports and find out where on planet Earth* your next job should be.</MissionContent>
    <JoinButton>Join</JoinButton>
    <p>* more planets coming soon</p>
  </MissionContainer>
);

export default Mission;
