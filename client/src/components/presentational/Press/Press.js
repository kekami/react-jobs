import React from 'react';
import { Wrapper, H1, H3, Center, CommentWrap, CommentBox, CommentText, QuoteAuth } from './styles';
import { LogoWrap, LogoBox1, LogoBox2, LogoBox3, LogoBox4, LogoBox5, LogoBox6 } from './styles';

const PressComments = ({ comments }) => {
  const commentsJSX = comments.map((comment, index) => (
    <CommentBox key={index}>
      <i className="fa fa-quote-right fa-2x" />
      <CommentText>
        { comment[0] }
      </CommentText>
      <QuoteAuth>
        { comment[1] }
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
        <img style={ {width: '100%'} } src={logo} alt="" />
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
      'Need A Break From Home, But Want To Keep Working? Take A Jobbatical.', 'Wicked Websites',
    ],
    [
      'Jobbatical provides an international “help-wanted” platform.', 'Wicked Websites',
    ],
    [
      'Would you be interested in taking a Jobbatical?', 'Wicked Websites',
    ],
  ];

  const logos = [
    'https://i.forbesimg.com/media/amp/images/forbes-logo-dark.png',
    'https://static1.squarespace.com/static/54749c39e4b0712a5b6a8d96/t/54aff0cde4b0ce916d661055/1420816594157/wallstreetjournal.png',
    'http://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/1.2.0/bbc_news_logo.png?cb=1',
    'http://www.adweek.com/wp-content/uploads/sites/9/2015/07/MAshable_Logo.jpg',
    'http://talkingbiznews.com/wp-content/uploads/2014/11/business-insider-logo_full_600.jpg',
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

