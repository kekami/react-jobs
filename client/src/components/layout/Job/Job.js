import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../presentational/Navbar';
import JobDetailsContainer from '../../container/JobDetails/JobDetailsContainer';
import { Sitemap } from '../../presentational/Sitemap/Sitemap';
import Footer from '../../presentational/Footer';

export default function Job(props) {
  return (
    <div>
      <Navbar />
      <JobDetailsContainer hash={props.location.hash} />
      <Sitemap />
      <Footer />
    </div>
  );
}

Job.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
  }).isRequired,
};

