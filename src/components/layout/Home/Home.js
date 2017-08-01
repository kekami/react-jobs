import React from 'react';
import Navbar from '../../presentational/Navbar';
import { Hero } from '../../presentational/Hero/Hero';
import { Press } from '../../presentational/Press/Press';
import { Sitemap } from '../../presentational/Sitemap/Sitemap';


const Home = () => (
  <div>
    <Navbar />
    <Hero />
    <Press />
    <Sitemap />

  </div>
);

export default Home;
