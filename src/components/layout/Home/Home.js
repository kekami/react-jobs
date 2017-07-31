import React from 'react';
import Navbar from '../../presentational/Navbar';
import FeaturedJobs from '../../container/FeaturedJobs';
import { Hero } from '../../presentational/Hero/Hero.js';

const Home = () => (
  <div>
    <Navbar />
    <Hero />
    <FeaturedJobs />
  </div>
);

export default Home;
