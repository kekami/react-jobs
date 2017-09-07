import React from 'react';
import { ApplyNowTag } from './styles';
import { RoleSummary } from '../JobDetails/JobDetails';
import { JobNavSubcomponentLayout, Details } from '../../container/JobDetails/styles';

export const ApplyNow = props => (
  <ApplyNowTag>
    <Details>
      <RoleSummary {...props} applyNow />
      <JobNavSubcomponentLayout />
    </Details>
  </ApplyNowTag>
);
