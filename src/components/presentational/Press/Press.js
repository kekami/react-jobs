import React from 'react';
import { Wrapper, H1, H3, Center, CommentWrap, CommentBox, CommentText, QuoteAuth } from './styles';
import { LogoWrap, LogoBox1, LogoBox2, LogoBox3, LogoBox4, LogoBox5, LogoBox6 } from './styles';

const PressComments = ({ comments }) => {
  const commentsJSX = comments.map((comment, index) => (
    <CommentBox key={index}>
      <i className="fa fa-quote-right fa-2x" />
      <CommentText>
        They are great!
      </CommentText>
      <QuoteAuth>
        Wicked Websites
      </QuoteAuth>
    </CommentBox>
  ));

  return (
    <CommentWrap>
      {commentsJSX}
    </CommentWrap>
  );
};

export const LogoTags = {
  1: LogoBox1,
  2: LogoBox2,
  3: LogoBox3,
  4: LogoBox4,
  5: LogoBox5,
  6: LogoBox6,
};

const Logos = ({ logos }) => {
  const len = logos.length;
  const CustomLogoBox = LogoTags[len];

  const logosJSX = logos.map((logo, index) =>
    (
      <CustomLogoBox key={index}>
        {logo}
      </CustomLogoBox>
    )
  );

  return (
    <LogoWrap>
      {logosJSX}
    </LogoWrap>
  );
};

export function Press() {
  const comments = [
    [
      'They are great!', 'Wicked Websites',
    ],
    [
      'They are great!', 'Wicked Websites',
    ],
    [
      'They are great!', 'Wicked Websites',
    ],
  ];

  const logos = [
    'Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5',
  ];
  return (
    <Wrapper>
      <H3>THE PRESS</H3>
      <Center>
        <H1>What they are saying</H1>
      </Center>
      <PressComments comments={comments} />
      <Logos logos={logos} />
    </Wrapper>
  );
};

