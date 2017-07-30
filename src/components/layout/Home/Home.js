import React from 'react';
import Navbar from '../../presentational/Navbar';
import { Hero } from '../../presentational/Hero/Hero.js';
import { Sitemap } from '../../presentational/Sitemap/Sitemap.js';

const Home = () => (
  <div>
    <Navbar />
    <Hero />
    <Sitemap />
  </div>
);

export default Home;
