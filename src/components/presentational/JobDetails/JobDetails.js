import React from 'react';
import { 
  Wrapper, 
  Card, 
  JobHeaderTitle, 
  JobHeaderBaseContainer, 
  TimeLeft, 
  PositionAvailability,
  JobHeaderBase, 
  HeaderActions,
  ViewJobsButton } from './styles';
import { timeLeft } from '../JobCard/JobCard'
import { Link } from 'react-router-dom';


const TitleCard = ({title, deadline}) => {
  const expiration = timeLeft(deadline);
  const isExpired = expiration.expiresIn === 'Expired';  
 
// if expired display note that it has

  return (
    <Card>
      <JobHeaderTitle>{title}</JobHeaderTitle>
      <JobHeaderBaseContainer>      
        { isExpired ? <p>Expired</p> : 
          ( 
            <JobHeaderBase>
              <div>
                <PositionAvailability>
                  <TimeLeft
                    expiring={expiration.unit === 'day' || expiration.unit === 'days'}
                  > 
                    {`${expiration.expiresIn} ${expiration.unit}`} left
                  </TimeLeft> 
                  <span> </span> to apply
                </PositionAvailability>
                <PositionAvailability>Position available immediately</PositionAvailability>
              </div>
              <HeaderActions>
                <button>Save for later<i className="fa fa-bookmark" aria-hidden="true" /></button>
                <Link to="/apply">
                  <ViewJobsButton>
                    Apply Now 
                  </ViewJobsButton>
                </Link>
              </HeaderActions>
            </JobHeaderBase>
          )
        }
      </JobHeaderBaseContainer>
    </Card>
  )
}


export default function JobDetails(props) {
  
  const cardIndex = {
    "role summary": <TitleCard {...props.job}/>,
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
