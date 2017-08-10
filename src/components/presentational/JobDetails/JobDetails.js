import React from 'react';
import { 
  Wrapper, 
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
  CardGeneralTag } from './styles';
import { timeLeft } from '../JobCard/JobCard'
import { Link } from 'react-router-dom';


const TitleCard = ({title, deadline}) => {
  const expiration = timeLeft(deadline);
  const isExpired = expiration.expiresIn === 'Expired';  
 
// if expired display note that it has

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

const GeneralCard = (props) => {
  
  if (props.points === undefined) { return <CardGeneralTag /> }
  const listItems = props.points.map((item) => (<li key={item.slice(0, 10)}><span>{item}</span></li>));
  
  return (
    <CardGeneralTag>
      <h1>{props.type}</h1>
      <ul>
        {listItems}
      </ul>
    </CardGeneralTag>
  )
}


export default function JobDetails(props) {
  
  const cardIndex = {
    "role summary": <TitleCard {...props.job}/>,
    "responsibilities": <GeneralCard points={props.job.responsibilities} type={'Responsibilites'} />,
    "requirements": <GeneralCard points={props.job.requirements} type={'Requirements'} />,
    "compensation": <GeneralCard points={props.job.compensation} type={'Compensation'} />
  } 
  
  const displayCards = props.items.map((item) => cardIndex[item])

  return (
    <Wrapper>
      <div>
        {displayCards}
      </div>
    </Wrapper>
  );
}
