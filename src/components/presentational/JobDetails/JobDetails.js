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
  CardGeneralTag,
  SummaryTitle,
  InfoTag,
  Bold,
  JoinButton,
  ApplyNowTag } from './styles';
import { timeLeft } from '../JobCard/JobCard'
import { Link } from 'react-router-dom';


class RoleSummary extends React.Component {
  render () {

  const {title, deadline, applyNow = false, getRef} = this.props;

  const expiration = timeLeft(deadline);
  const isExpired = expiration.expiresIn === 'Expired';  
 
// if expired display note that it has
// link for further information on an organisation from the summary page.

    return (
      <div ref={ ( applyNow ) ? getRef : "" }>
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
        { applyNow ? <div/> :
          <CardShare>
              <p>Know someone who would be perfect for this job? Share the link:</p>
          </CardShare>  
        }
      </div>
    )
  }
}



const AboutTitle = (props) => {
  const tags = [
    ["teamSize", "TEAM SIZE"],
    ["founded", "FOUNDED"], 
    ["type", "TYPE"]
  ];
  
  for (let i = 0; i < tags.length; i++) {
    if (!props.hasOwnProperty(tags[i][0])) { 
      tags.splice(i, 1);
      i--;
    }
  }

  const InfoTags = tags.map( tag => <InfoTag>{tag[1]}: {props[tag[0]]}</InfoTag> );

  return (
    <div>
      <SummaryTitle>
        <div>
         <h1>{props.companyName}</h1>
          <h2>in {props.location}</h2>
        </div>
        <img src={props.companyLogo} alt="Company Logo" />    
      </SummaryTitle>
      {InfoTags}    
    </div>
  )
}

const AboutSummary = (props) => {
  
  return (
    <CardGeneralTag>
      <AboutTitle 
        {...props}  
      />
      <p>{props.description}</p>
      <a href="" alt="">Read more about {props.companyName}</a> 
    </CardGeneralTag>
  )
}

const About = (props) => {
  
  let socialMedia = [];

  if (props.hasOwnProperty("socialMedia")) {
    const socialMediaMap = props.socialMedia.map( (media) => {
      return media[1] ? (<a href={media[1]} alt={`company ${media[0]}`}>{media[0]}</a>) : null
      }
    );

    const socialMediaReduced = socialMediaMap.reduce( 
      (acc, media ) => { return (media == null) ? acc : acc.concat([media]) },
       []);
    
    socialMedia = (socialMediaReduced == []) ? "" : ( <p>Social Media: {socialMediaReduced}</p> )
  }
 
  return (
    <CardGeneralTag>
      <AboutTitle 
        {...props}  
      />
      <p>{props.descriptionFull}</p>
      <p>Website: <a href={props.website} alt="company website">{props.website}</a></p>
      {socialMedia}
    </CardGeneralTag>
  )
}

const GeneralCard = ({points, type }) => {
  
  if (points === undefined) { return <CardGeneralTag /> }
  const listItems = points.map( item => <li key={item.slice(0, 10)}><span>{item}</span></li>);
  
  return (
    <CardGeneralTag>
      <h1>{type}</h1>
      <ul>
        {listItems}
      </ul>
    </CardGeneralTag>
  )
}

const JobDescriptionCard = ({content}) => {

  if (content === undefined) { return <CardGeneralTag />}
  const paragraphs = content.map( item => <p>{item}</p> )

  return (
    <CardGeneralTag>
      <h1>Job Description</h1>
      {paragraphs}
    </CardGeneralTag>
  )
}

const NotificationsCard = (props) => {
  return (
    <CardGeneralTag>
      <Bold>Get notified about similar jobs</Bold>
      <p>Make sure you don't miss the best opportunities—sign up for our weekly notifications about new jobs. No spam, we promise.</p>
      <JoinButton>
        JOIN NOW
      </JoinButton>
    </CardGeneralTag>
  )
}

export default function JobDetails(props) {
  
  const cardIndex = {
    "role summary": 
      <div>
        <RoleSummary {...props.job}/>
        <AboutSummary {...props.job} />
      </div>,
    "responsibilities": <GeneralCard points={props.job.responsibilities} type={'Responsibilites'} />,
    "requirements": <GeneralCard points={props.job.requirements} type={'Requirements'} />,
    "compensation": <GeneralCard points={props.job.compensation} type={'Compensation'} />,
    "jobDescription": <JobDescriptionCard content={props.job.jobDescription} />,
    "about": <About {...props.job} />,
    "notifications": <NotificationsCard />
  } 
  
  let displayCards = props.items.map((item) => cardIndex[item])
  displayCards.push(cardIndex["about"], cardIndex["notifications"])

  return (
    <Wrapper>
      <div>
        {displayCards}
      </div>
    </Wrapper>
  );
}

export const ApplyNow = (props) => (
  <ApplyNowTag>
    <RoleSummary {...props} applyNow={true}  />
  </ApplyNowTag>
)