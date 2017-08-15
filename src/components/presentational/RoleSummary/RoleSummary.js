import React from 'react';
import { 
  FooterWrapper, 
  CardHeader, 
  JobHeaderTitle, 
  JobHeaderBaseContainer, 
  ExpiredMessage,
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
import { timeLeft } from '../JobCard/JobCard'
import { Link } from 'react-router-dom';
import { Details, JobDetailsWrapper, JobNavSubcomponentLayout } from '../../container/JobDetails/styles.js'

export class RoleSummaryHeader extends React.Component {
  render () {

  const {title, deadline} = this.props;

  const expiration = timeLeft(deadline);
  const isExpired = expiration.expiresIn === 'Expired';  
 
// if expired display note that it has
// link for further information on an organisation from the summary page.

    return (
      <div>
        <CardHeader>
          <JobHeaderTitle>{title}</JobHeaderTitle>
          <JobHeaderBaseContainer>      
            { isExpired ? <ExpiredMessage>Expired</ExpiredMessage> : 
              ( 
                <JobHeaderBase>
                  <TimeContainer>
                    <p>
                      <TimeLeft
                        expiring={expiration.unit === 'day' || expiration.unit === 'days'}
                      > 
                        {`${expiration.expiresIn} ${expiration.unit}`} left
                      </TimeLeft> 
                      <span> </span> to apply
                    </p>
                    <p>
                      Position available immediately
                    </p>
                  </TimeContainer>
                  <HeaderActions>
                    <SaveForLater>Save for later<i className="fa fa-bookmark" aria-hidden="true" /></SaveForLater>
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
        </CardShare>
      </div>  
    )
  }
}



export class RoleSummaryFooter extends React.Component {
  render() {
    const { getRef, title, companyName, deadline } = this.props;

    const expiration = timeLeft(deadline);
    const isExpired = expiration.expiresIn === 'Expired';      
    
    return (
      <div ref={getRef}>
          <FooterWrapper isExpired={isExpired} > 
            <Details>
              <JobDetailsWrapper>
                <CardFooter>
                  <div>
                    <JobFooterTitle>{title}</JobFooterTitle>
                    <p>At {companyName} -&nbsp;</p>
                    { isExpired ? <Expired>Expired</Expired> : 
                      <p>
                        <TimeLeft
                          expiring={expiration.unit === 'day' || expiration.unit === 'days'}
                        > 
                          {`${expiration.expiresIn} ${expiration.unit}`} left
                        </TimeLeft> 
                        <span> </span> to apply
                      </p>
                    }
                  </div>
                  <FooterActions>
                    <SaveForLater>Save for later<i className="fa fa-bookmark" aria-hidden="true" /></SaveForLater>
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
    )
  }
}