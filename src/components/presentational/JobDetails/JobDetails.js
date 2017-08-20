import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  CardGeneralTag,
  SummaryTitle,
  InfoTag,
  Bold,
  JoinButton,
} from './styles';
import { RoleSummaryHeader } from '../RoleSummary/RoleSummary';


const AboutTitle = (props) => {
  const tags = [
    ['teamSize', 'TEAM SIZE'],
    ['founded', 'FOUNDED'],
    ['type', 'TYPE'],
  ];

  for (let i = 0; i < tags.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(props, tags[i][0])) {
      tags.splice(i, 1);
      i -= 1;
    }
  }

  const InfoTags = tags.map(tag =>
    <InfoTag key={tag[0]}>{tag[1]}: {props[tag[0]]}</InfoTag>,
  );

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
  );
};

AboutTitle.propTypes = {
  companyName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  companyLogo: PropTypes.string.isRequired,
};

const AboutSummary = props => (
  <CardGeneralTag>
    <AboutTitle
      {...props}
    />
    <p>{props.description}</p>
    <a href="" alt="">Read more about {props.companyName}</a>
  </CardGeneralTag>
);

AboutSummary.propTypes = {
  description: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
};

const About = (props) => {
  let socialMedia = [];

  if (Object.prototype.hasOwnProperty.call(props, 'socialMedia')) {
    const socialMediaMap = props.socialMedia.map((media) => {
      let jsx = null;
      if (media[1]) {
        jsx = (
          <a key={'media[0]'} href={media[1]} alt={`company ${media[0]}`}>
            {media[0]}
          </a>
        );
      }
      return jsx;
    });

    const socialMediaReduced = socialMediaMap.reduce(
      (acc, media) => ((media === null) ? acc : acc.concat([media])), []);

    socialMedia = '';
    if (!socialMediaReduced === []) {
      socialMedia = (<p>Social Media: {socialMediaReduced}</p>);
    }
  }

  return (
    <div ref={ref => props.storeRef(ref, 'about')}>
      <CardGeneralTag>
        <AboutTitle
          {...props}
        />
        <p>{props.descriptionFull}</p>
        <p>Website: <a href={props.website} alt="company website">{props.website}</a></p>
        {socialMedia}
      </CardGeneralTag>
    </div>
  );
};

About.propTypes = {
  socialMedia: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  storeRef: PropTypes.func.isRequired,
  descriptionFull: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};

const GeneralCard = ({ points, type, storeRef }) => {
  if (points === undefined) { return <CardGeneralTag />; }
  const listItems = points.map(item => <li key={item.slice(0, 10)}><span>{item}</span></li>);
  const name = type[0].toUpperCase() + type.slice(1, type.length);

  return (
    <div ref={ref => storeRef(ref, type)}>
      <CardGeneralTag >
        <h1>{name}</h1>
        <ul>
          {listItems}
        </ul>
      </CardGeneralTag>
    </div>
  );
};

GeneralCard.propTypes = {
  points: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  storeRef: PropTypes.func.isRequired,
};

const JobDescriptionCard = ({ content, storeRef }) => {
  if (content === undefined) { return <CardGeneralTag />; }
  const paragraphs = content.map(item => <p key={item.slice(0, 10)}>{item}</p>);

  return (
    <div ref={ref => storeRef(ref, 'jobDescription')}>
      <CardGeneralTag >
        <h1>Job Description</h1>
        {paragraphs}
      </CardGeneralTag>
    </div>
  );
};

JobDescriptionCard.propTypes = {
  content: PropTypes.string.isRequired,
  storeRef: PropTypes.func.isRequired,
};

const NotificationsCard = () => (
  <CardGeneralTag>
    <Bold>Get notified about similar jobs</Bold>
    <p>Make sure you {'don\'t'} miss the best opportunities—sign
      up for our weekly notifications about new jobs. No spam, we promise.</p>
    <JoinButton>
      JOIN NOW
    </JoinButton>
  </CardGeneralTag>
);

export default function JobDetails(props) {
  const cardIndex = {
    'role summary': (
      <div key={'roleSummary'}>
        <RoleSummaryHeader {...props.job} storeRef={props.storeRef} />
        <AboutSummary {...props.job} />
      </div>
    ),
    responsibilities: <GeneralCard key={'responsibilities'} points={props.job.responsibilities} type={'responsibilities'} storeRef={props.storeRef} />,
    requirements: <GeneralCard key={'requirements'} points={props.job.requirements} type={'requirements'} storeRef={props.storeRef} />,
    compensation: <GeneralCard key={'compensation'} points={props.job.compensation} type={'compensation'} storeRef={props.storeRef} />,
    jobDescription: <JobDescriptionCard key={'jobDescription'} content={props.job.jobDescription} storeRef={props.storeRef} />,
    about: <About key={'about'} {...props.job} storeRef={props.storeRef} />,
    notifications: <NotificationsCard key={'notifications'} />,
  };

  const displayCards = props.items.map((item) => {
    const itemName = item[0];
    return cardIndex[itemName];
  },
  );
  displayCards.push(cardIndex.notifications);

  return (
    <Wrapper>
      <div>
        {displayCards}
      </div>
    </Wrapper>
  );
}

JobDetails.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companyLogo: PropTypes.string.isRequired,
    headquarters: PropTypes.string.isRequired,
    teamSize: PropTypes.string.isRequired,
    founded: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    socialMedia: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    videoLifeAt: PropTypes.string,
    deadline: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string.isRequired),
    requirements: PropTypes.arrayOf(PropTypes.string.isRequired),
    compensation: PropTypes.arrayOf(PropTypes.string.isRequired),
    jobDescription: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  storeRef: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired],
      ),
    ),
  ).isRequired,
};

JobDetails.defaultProps = {
  job: {
    videoLifeAt: '',
  },
};
