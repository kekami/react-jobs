import React from 'react';
import { Wrapper, ApplyNowTag } from './styles';
import { RoleSummary } from '../JobDetails/JobDetails';
import { JobNavSubcomponentLayout } from '../../container/JobDetails/styles.js'
import { Details } from '../../container/JobDetails/styles.js';

export const ApplyNow = (props) => (
  <ApplyNowTag>
    <Details>
      <RoleSummary {...props} applyNow={true}  />
      <JobNavSubcomponentLayout />
    </Details>
  </ApplyNowTag>
)