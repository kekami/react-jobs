import React from 'react';
import { Link } from 'react-router-dom';
import { FlexCol, SitemapWrapper, Header, Column, P, Fb, Ln, Twitter, GPlus, InstagramBackground, Instagram } from './styles';

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
          <P>SAVED JOBS</P>
          {/* <Link to="/saved">SAVED JOBS</Link> */}
          <P>MY APPLICATIONS</P>
          {/* <Link to="/applications">MY APPLICATIONS</Link> */}
        </FlexCol>
      </Column>

      <Column>
        <Header>
          <strong>FOR BUSINESS</strong>
        </Header>
        <FlexCol>
          <P>WHAT WE OFFER</P>
          <P>PRICING</P>
          <P>CUSTOMERS</P>
          {/* <Link to="/offer">WHAT WE OFFER</Link>
          <Link to="/pricing">PRICING</Link>
          <Link to="/customers">CUSTOMERS</Link> */}
        </FlexCol>
      </Column>

      <Column>
        <Header>
          <strong>ABOUT US</strong>
        </Header>
        <FlexCol>
          <P>OUR STORY</P>
          <P>SUPPORT</P>
          <P>JOIN THE TEAM</P>
          <P>BLOG</P>
          {/* <Link to="/story">OUR STORY</Link>
          <Link to="/support">SUPPORT</Link>
          <Link to="/jointeam">JOIN THE TEAM</Link>
          <Link to="/blog">BLOG</Link> */}
        </FlexCol>
      </Column>

      <Column>
        <Header>
          <strong>FOLLOW US</strong>
        </Header>
        <FlexCol>
          {/* <Link to="/fb"> */}
          <Link to={`${window.location.pathname}${window.location.hash}`}>
            <div>FACEBOOK<Fb className="fa fa-facebook-square fa-2x" aria-hidden="true" /></div>
          </Link>
          {/* <Link to="/twitter"> */}
          <Link to={`${window.location.pathname}${window.location.hash}`}>
            <div>TWITTER<Twitter className="fa fa-twitter-square fa-2x" aria-hidden="true" />
            </div>
          </Link>
          {/* <Link to="/linked"> */}
          <Link to={`${window.location.pathname}${window.location.hash}`}>
            <div>LINKEDIN<Ln className="fa fa-linkedin-square fa-2x" aria-hidden="true" /></div>
          </Link>
          {/* <Link to="/gplus"> */}
          <Link to={`${window.location.pathname}${window.location.hash}`}>
            <div>GOOGLE+<GPlus className="fa fa-google-plus-square fa-2x" aria-hidden="true" />
            </div>
          </Link>
          {/* <Link to="/insta"> */}
          <Link to={`${window.location.pathname}${window.location.hash}`}>
            <div>INSTAGRAM
              <InstagramBackground>
                <Instagram className="fa fa-instagram fa-2x" aria-hidden="true" />
              </InstagramBackground>
            </div>
          </Link>
        </FlexCol>
      </Column>
    </SitemapWrapper>
  );
}
