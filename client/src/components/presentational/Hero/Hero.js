import React from 'react';
import { Wrapper, H1, H2, P, Article, Footer } from './styles';
import { Button, I, FlexRow } from '../Button/Button';
import { BracesLeft, BracesRight } from './assets/CurlyBraces';

export function Hero() {
  return (
    <Wrapper>
      <Article>
        <BracesLeft />
        <BracesRight />
        <H2>Travel. Work.</H2>
        <H1><em>See the world</em></H1>
        <FlexRow>
          <Button>
            <I className="fa fa-search fa-2x" aria-hidden="true" />
            EXPLORE ALL JOBS
          </Button>
          <Button>
            <I className="fa fa-users fa-2x" aria-hidden="true" />
            HIRING? START HERE
          </Button>
        </FlexRow>
        <P>Use Jobbatical to find a tech, business, <br />or creative job abroad.</P>
      </Article>
      <Footer>
        <P>Currently heaps of teams in loads of <br />countries could use your help! </P>
      </Footer>
    </Wrapper>
  );
}
