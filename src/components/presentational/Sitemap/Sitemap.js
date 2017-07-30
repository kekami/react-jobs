import React from 'react';
import { Link } from 'react-router-dom';
import { FlexCol, SitemapWrapper, Header, Column, I } from './styles.js';

export function Sitemap(props) {
  return (
    <SitemapWrapper>
      <Column>
        <Header>
          <strong>FOR TALENT</strong>
        </Header>
        <FlexCol>
          <Link to="/">HOME</Link>
          <Link to="/jobs">EXPLORE JOBS</Link>
          <Link to="/profile">MY PROFILE</Link>
          <Link to="/saved">SAVED JOBS</Link>
          <Link to="/applications">MY APPLICATIONS</Link>
        </FlexCol>
      </Column>

      <Column>
        <Header>
          <strong>FOR BUSINESS</strong>
        </Header>
        <FlexCol>
          <Link to="/offer">WHAT WE OFFER</Link>
          <Link to="/pricing">PRICING</Link>
          <Link to="/customers">CUSTOMERS</Link>
        </FlexCol>
      </Column>

      <Column>
        <Header>
          <strong>ABOUT US</strong>
        </Header>
        <FlexCol>
          <Link to="/story">OUR STORY</Link>
          <Link to="/support">SUPPORT</Link>
          <Link to="/jointeam">JOIN THE TEAM</Link>
          <Link to="/blog">BLOG</Link>
        </FlexCol>
      </Column>

      <Column>
        <Header>
          <strong>FOLLOW US</strong>
        </Header>
        <FlexCol>
          <Link to="/fb">FACEBOOK<I className="fa fa-facebook-square fa-2x" aria-hidden="true"></I></Link>
          <Link to="/twitter">TWITTER<I className="fa fa-twitter-square fa-2x" aria-hidden="true"></I></Link>
          <Link to="/linked">LINKEDIN<I className="fa fa-linkedin-square fa-2x" aria-hidden="true"></I></Link>
          <Link to="/gplus">GOOGLE+<I className="fa fa-google-plus-square fa-2x" aria-hidden="true"></I></Link>
          <Link to="/insta">INSTAGRAM<I className="fa fa-instagram fa-2x" aria-hidden="true"></I></Link>
        </FlexCol>
      </Column>


    </SitemapWrapper>
  );
}
