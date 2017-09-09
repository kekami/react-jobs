import React from 'react';
import Navbar from '../../presentational/Navbar';
import { Profile } from '../../presentational/Profile/Profile';
import { Sitemap } from '../../presentational/Sitemap/Sitemap';
import Footer from '../../presentational/Footer';


const ProfilePage= () => (
  <div>
    <Navbar />
    <Profile />
    <Sitemap />
    <Footer />
  </div>
);

export default ProfilePage;
