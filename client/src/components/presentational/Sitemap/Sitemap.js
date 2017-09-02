import React from 'react';
import { Link } from 'react-router-dom';
import { FlexCol, SitemapWrapper, Header, Column, I } from './styles';

export function Sitemap() {
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
          <Link to="/fb">
            <div>FACEBOOK<I className="fa fa-facebook-square fa-2x" aria-hidden="true"></I></div>
          </Link>
          <Link to="/twitter">
            <div>TWITTER<I className="fa fa-twitter-square fa-2x" aria-hidden="true"></I></div>
          </Link>
          <Link to="/linked">
            <div>LINKEDIN<I className="fa fa-linkedin-square fa-2x" aria-hidden="true"></I></div>
          </Link>
          <Link to="/gplus">
            <div>GOOGLE+<I className="fa fa-google-plus-square fa-2x" aria-hidden="true"></I></div>
          </Link>
          <Link to="/insta">
            <div>INSTAGRAM<I className="fa fa-instagram fa-2x" aria-hidden="true"></I></div>
          </Link>
        </FlexCol>
      </Column>


    </SitemapWrapper>
  );
}
