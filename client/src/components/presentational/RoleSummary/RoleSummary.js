import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FooterWrapper,
  CardHeader,
  JobHeaderTitle,
  JobHeaderBaseContainer,
  ExpiredMessage,
  OtherJobsButton,
  Fb,
  Ln,
  Twitter,
  TimeContainer,
  TimeLeft,
  JobHeaderBase,
  HeaderActions,
  SaveForLater,
  ApplyNowButton,
  CardShare,
  CardFooter,
  JobFooterTitle,
  Expired,
  FooterActions } from './styles';
import { timeLeft } from '../JobCard/JobCard';
import { Details, JobDetailsWrapper, JobNavSubcomponentLayout } from '../../container/JobDetails/styles';

export class RoleSummaryHeader extends React.Component {
  render() {
    const { title, deadline } = this.props;

    const expiration = timeLeft(deadline);
    const isExpired = expiration.expiresIn === 'Expired';

    // if expired display note that it has
    // link for further information on an organisation from the summary page.

    return (
      <div ref={ref => this.props.storeRef(ref, 'role summary')}>
        <CardHeader>
          <JobHeaderTitle>{title}</JobHeaderTitle>
          <JobHeaderBaseContainer>
            { isExpired ? (
              <ExpiredMessage>
                <p>
                  <i className="fa fa-info-circle fa-lg" aria-hidden="true" />
                  This Job opening has expired
                </p>
                <OtherJobsButton>Other Jobs</OtherJobsButton>
              </ExpiredMessage>
            ) :
              (
                <JobHeaderBase>
                  <TimeContainer>
                    <p>
                      <TimeLeft
                        expiring={expiration.unit === 'day' || expiration.unit === 'days'}
                      >
                        {`${expiration.expiresIn} ${expiration.unit}`} left
                      </TimeLeft>
                      &nbsp; to apply
                    </p>
                    <p>
                      Position available immediately
                    </p>
                  </TimeContainer>
                  <HeaderActions>
                    <SaveForLater>Save for later
                      <i
                        className="fa fa-bookmark"
                        aria-hidden="true"
                      />
                    </SaveForLater>
                    <Link to="/apply">
                      <ApplyNowButton>
                        Apply Now
                      </ApplyNowButton>
                    </Link>
                  </HeaderActions>
                </JobHeaderBase>
              )
            }
          </JobHeaderBaseContainer>
        </CardHeader>
        <CardShare>
          <p>Know someone who would be perfect for this job? Share the link:</p>
          <Ln className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
          <Fb className="fa fa-facebook-square fa-3x" aria-hidden="true" />
          <Twitter className="fa fa-twitter-square fa-3x" aria-hidden="true" />
        </CardShare>
      </div>
    );
  }
}

RoleSummaryHeader.propTypes = {
  title: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  storeRef: PropTypes.func.isRequired,
};

export class RoleSummaryFooter extends React.Component {
  render() {
    const { getRef, title, companyName, deadline, fixed } = this.props;

    const expiration = timeLeft(deadline);
    const isExpired = expiration.expiresIn === 'Expired';

    return (
      <div ref={getRef}>
        <FooterWrapper isExpired={isExpired} fixed={fixed} >
          <Details>
            <JobDetailsWrapper>
              <CardFooter>
                <div>
                  <JobFooterTitle>{title}</JobFooterTitle>
                  <p>At {companyName} -&nbsp;</p>
                  {isExpired ? <Expired>Expired</Expired> :
                    (
                      <p>
                        <TimeLeft
                          expiring={expiration.unit === 'day' || expiration.unit === 'days'}
                        >
                          {`${expiration.expiresIn} ${expiration.unit}`} left
                        </TimeLeft>
                        <span /> to apply
                      </p>
                    )
                  }
                </div>
                <FooterActions>
                  <SaveForLater>Save for later<i className="fa fa-bookmark" aria-hidden="true" />
                  </SaveForLater>
                  <Link to="/apply">
                    <ApplyNowButton>
                        Apply Now
                    </ApplyNowButton>
                  </Link>
                </FooterActions>
              </CardFooter>
            </JobDetailsWrapper>
            <JobNavSubcomponentLayout />
          </Details>
        </FooterWrapper>
      </div>
    );
  }
}

RoleSummaryFooter.propTypes = {
  title: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  getRef: PropTypes.func.isRequired,
  companyName: PropTypes.string.isRequired,
  fixed: PropTypes.bool.isRequired,
};