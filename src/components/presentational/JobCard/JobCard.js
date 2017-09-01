import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  JobCardContainer,
  Content,
  JobHeader,
  JobSubHeader,
  CompanyName,
  JobDescription,
  Truncate,
  Footer,
  TimeLeft,
} from './styles';

const JobCard = ({ image, title, location, companyName, description, deadline, id }) => {
  const expiration = timeLeft(deadline);
  const isExpired = expiration.expiresIn === 'Expired';

  return (
    <JobCardContainer expired={isExpired}>
      <Link to={{ pathname: '/job', hash: `#${id}` }}>
        <img src={image} alt="" />
        <Content>
          <JobHeader expired={isExpired}>{title}</JobHeader>
          <JobSubHeader>At <CompanyName>{companyName}</CompanyName>, {location}</JobSubHeader>
          <JobDescription><Truncate>{description}</Truncate><span>...</span></JobDescription>
        </Content>
      </Link>
      {isExpired ?
        <Footer><p>Expired</p></Footer> :
        <Footer>
          <p>
            <TimeLeft
              expiring={expiration.unit === 'day' || expiration.unit === 'days'}
            >
              {`${expiration.expiresIn} ${expiration.unit}`}
            </TimeLeft> to apply</p>
          <button>Save <i className="fa fa-bookmark" aria-hidden="true" /></button>
        </Footer>
      }
    </JobCardContainer>
  );
};

JobCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
};

export default JobCard;

export function diffMonths(dt2, dt1) {
  let diff = (dt2.getTime() - dt1.getTime());
  if (diff < 0) return 'Expired';
  diff /= (1000 * 60 * 60 * 24 * 7 * 4);
  return Math.abs(Math.round(diff));
}

export function diffDays(dt2, dt1) {
  let diff = (dt2.getTime() - dt1.getTime());
  if (diff < 0) return 'Expired';
  diff /= (1000 * 60 * 60 * 24);
  return Math.abs(Math.round(diff));
}

export function timeLeft(deadline) {
  let expiration = {};
  const monthDiff = diffMonths(new Date(deadline), new Date(Date.now()));

  if (monthDiff > 0) {
    const expiresIn = diffMonths(new Date(deadline), new Date(Date.now()));
    expiration = {
      expiresIn,
      unit: (expiresIn > 1) ? 'months' : 'month',
    };
  } else if (monthDiff === 0) {
    const expiresIn = diffDays(new Date(deadline), new Date(Date.now()));
    expiration = {
      expiresIn: expiresIn === 0 ? 'Expired' : expiresIn,
      unit: (expiresIn > 1) ? 'days' : 'day',
    };
  } else {
    expiration = {
      expiresIn: 'Expired',
      unit: null,
    };
  }

  return expiration;
}
