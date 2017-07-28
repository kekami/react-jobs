import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, Logo, Nav, SubNav, HighLight, Conditional } from './styles';

const Navbar = () => (
  <NavbarContainer>
    <Logo>
      <img src="#" alt="" />
      <h2><Link to="/">jobbatical</Link></h2>
    </Logo>

    <Nav>
      <Conditional>
        <Link to="/jobs">Explore Jobs</Link>
      </Conditional>

      <SubNav>
        <Link to="/login">Log In</Link>
        <Link to="/join">Join</Link>
        <Conditional>
          <HighLight>
            <Link to="/hiring">For the employers →</Link>
          </HighLight>
        </Conditional>
      </SubNav>
    </Nav>
  </NavbarContainer>
);

export default Navbar;
