import React from 'react';
import Navbar from '../../presentational/Navbar';
import ExploreJobs from '../../container/ExploreJobs';
import { Sitemap } from '../../presentational/Sitemap/Sitemap';


const JobsView = () => (
  <div>
    <Navbar />
    <ExploreJobs />
    <Sitemap />
  </div>
);

export default JobsView;
