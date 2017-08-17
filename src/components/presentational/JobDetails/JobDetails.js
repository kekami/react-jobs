import React from 'react';
import { 
  Wrapper, 
  CardGeneralTag,
  SummaryTitle,
  InfoTag,
  Bold,
  JoinButton,
   } from './styles';
import { RoleSummaryHeader } from '../RoleSummary/RoleSummary'


const AboutTitle = (props) => {
  const tags = [
    ['teamSize', 'TEAM SIZE'],
    ['founded', 'FOUNDED'], 
    ['type', 'TYPE']
  ];
  
  for (let i = 0; i < tags.length; i++) {
    if (!props.hasOwnProperty(tags[i][0])) { 
      tags.splice(i, 1);
      i--;
    }
  }

  const InfoTags = tags.map( tag => <InfoTag key={tag[0]}>{tag[1]}: {props[tag[0]]}</InfoTag> );

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

  if (props.hasOwnProperty('socialMedia')) {
    const socialMediaMap = props.socialMedia.map( (media) => {
      return media[1] ? (<a key={'media[0]'} href={media[1]} alt={`company ${media[0]}`}>{media[0]}</a>) : null
      }
    );

    const socialMediaReduced = socialMediaMap.reduce( 
      (acc, media ) => { return (media == null) ? acc : acc.concat([media]) },
       []);
    
    socialMedia = (socialMediaReduced === []) ? '' : ( <p>Social Media: {socialMediaReduced}</p> )
  }
 
  return (
    <div  ref={(ref) => props.storeRef(ref, 'about')}>
      <CardGeneralTag>
        <AboutTitle 
          {...props}  
        />
        <p>{props.descriptionFull}</p>
        <p>Website: <a href={props.website} alt="company website">{props.website}</a></p>
        {socialMedia}
      </CardGeneralTag>
    </div>
  )
}

const GeneralCard = ({points, type, storeRef}) => {
  
  if (points === undefined) { return <CardGeneralTag /> }
  const listItems = points.map( item => <li key={item.slice(0, 10)}><span>{item}</span></li>);
  
  return (
    <div  ref={(ref) => storeRef(ref, type)}>
      <CardGeneralTag >
        <h1>{type}</h1>
        <ul>
          {listItems}
        </ul>
      </CardGeneralTag>
    </div>
  )
}

const JobDescriptionCard = ({content, storeRef}) => {

  if (content === undefined) { return <CardGeneralTag />}
  const paragraphs = content.map( item => <p key={item.slice(0, 10)}>{item}</p> )

  return (
    <div  ref={(ref) => storeRef(ref, 'jobDescription')}>
      <CardGeneralTag >
        <h1>Job Description</h1>
        {paragraphs}
      </CardGeneralTag>
    </div>
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
    'role summary':
      <div key={'roleSummary'}>
        <RoleSummaryHeader {...props.job} storeRef={props.storeRef}/>
        <AboutSummary {...props.job} />
      </div>,
    'responsibilities': <GeneralCard key={'responsibilities'} points={props.job.responsibilities} type={'responsibilities'} storeRef={props.storeRef} />,
    'requirements': <GeneralCard key={'requirements'} points={props.job.requirements} type={'requirements'} storeRef={props.storeRef} />,
    'compensation': <GeneralCard key={'compensation'} points={props.job.compensation} type={'compensation'} storeRef={props.storeRef} />,
    'jobDescription': <JobDescriptionCard key={'jobDescription'} content={props.job.jobDescription} storeRef={props.storeRef} />,
    'about': <About key={'about'} {...props.job} storeRef={props.storeRef}  />,
    'notifications': <NotificationsCard key={'notifications'} />
  } 
  
  let displayCards = props.items.map((item) => {
    const itemName = (typeof(item) === 'string') ? item : item[0];
    return cardIndex[itemName]
    }
  )
  displayCards.push(cardIndex['notifications'])

  return (
    <Wrapper>
      <div>
        {displayCards}
      </div>
    </Wrapper>
  );
}

