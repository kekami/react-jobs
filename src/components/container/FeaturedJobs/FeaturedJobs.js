import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JobCard from '../../presentational/JobCard';
import data from '../../../data.json';
import { FeaturedJobsContainer, FeaturedJobsHeader, ViewJobsButton, JobCardsContainer } from './styles';

class FeaturedJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
    };
  }

  componentWillMount() {
    this.setState({
      jobs: data.jobs,
    });
  }

  showViewJobsButton() {
    return (this.state.jobs.length > 12) ? (
      <Link to="/jobs">
        <ViewJobsButton>
          View all {this.state.jobs.length} jobs
        </ViewJobsButton>
      </Link>
    ) : null;
  }

  render() {
    const jobCards = this.state.jobs.map((job, i) => (
      (i < 12) ? <JobCard key={i} {...job} /> : null
    ));

    return (
      <FeaturedJobsContainer>
        <FeaturedJobsHeader>Featured Jobs</FeaturedJobsHeader>
        <JobCardsContainer>
          {jobCards}
        </JobCardsContainer>
        {this.showViewJobsButton()}
      </FeaturedJobsContainer>
    );
  }
}

export default FeaturedJobs;
