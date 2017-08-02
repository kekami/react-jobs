import React from 'react';
import Navbar from '../../presentational/Navbar';
import { Profile } from '../../presentational/Profile/Profile';
import { Sitemap } from '../../presentational/Sitemap/Sitemap';


const ProfilePage= () => (
  <div>
    <Navbar />
    <Profile />
    <Sitemap />
  </div>
);

export default Profile;
