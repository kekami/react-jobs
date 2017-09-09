import React from 'react';
import Navbar from '../../presentational/Navbar';
import ExploreJobs from '../../container/ExploreJobs';
import { Sitemap } from '../../presentational/Sitemap/Sitemap';
import Footer from '../../presentational/Footer';


const JobsView = () => (
  <div>
    <Navbar />
    <ExploreJobs />
    <Sitemap />
    <Footer />
  </div>
);

export default JobsView;
