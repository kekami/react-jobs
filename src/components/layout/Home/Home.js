import React from 'react';
import Navbar from '../../presentational/Navbar';
import FeaturedJobs from '../../container/FeaturedJobs';
import Footer from '../../presentational/Footer';
import Mission from '../../presentational/Mission';
import { Hero } from '../../presentational/Hero/Hero';
import { Press } from '../../presentational/Press/Press';
import { Sitemap } from '../../presentational/Sitemap/Sitemap';


const Home = () => (
  <div>
    <Navbar />
    <Hero />
    <FeaturedJobs />
    <Press />
    <Mission />
    <Sitemap />
    <Footer />
  </div>
);

export default Home;
