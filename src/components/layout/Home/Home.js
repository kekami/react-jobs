import React from 'react';
import Navbar from '../../presentational/Navbar';
import { Hero } from '../../presentational/Hero/Hero';
import { Press } from '../../presentational/Press/Press';


const Home = () => (
  <div>
    <Navbar />
    <Hero />
    <Press />
    <Sitemap />

  </div>
);

export default Home;
