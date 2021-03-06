import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Wrapper, H1, H2, P, P2, Article, Foot } from './styles';
import { Button, I, FlexRow } from '../Button/Button';
import { BracesLeft, BracesRight } from './assets/CurlyBraces';

const Centered = props => <Article>{props.children}</Article>;
const Footer = props => <Foot>{props.children}</Foot>;

export function Hero() {
  return (
    <Wrapper>
      <Centered>
        <BracesLeft />
        <BracesRight />
        <H2>Travel. Work.</H2>
        <H1><em>See the world</em></H1>
        <FlexRow>
          <Link to="/jobs">
            <Button>
              <I className="fa fa-search fa-2x" aria-hidden="true" />
              EXPLORE ALL JOBS
            </Button>
          </Link>
          <Button>
            <I className="fa fa-users fa-2x" aria-hidden="true" />
            HIRING? START HERE
          </Button>
        </FlexRow>
        <P>Use Jobbatical to find a tech, business, <br />or creative job abroad.</P>
      </Centered>
      <Footer>
        <P2>Currently heaps of teams in loads of <br />countries could use your help! </P2>
      </Footer>
    </Wrapper>
  );
}

Centered.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};