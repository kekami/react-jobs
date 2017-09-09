import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer } from './styles';

const Footer = () => (
  <FooterContainer>
    <p>© Jobbatical OÜ Niine 11, 10414, Tallinn, Estonia </p>
    <a href="mailto:clone@clone.com">clone@clone.com</a>
    <nav>
      <p>Terms of service</p>
      <p>Privacy Policy</p>
    </nav>
  </FooterContainer>
);


{/* <Link to="/terms">Terms of service</Link>
<Link to="/terms/privacy">Privacy Policy</Link> */}

export default Footer;

