import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, Logo, Nav, SubNav, HighLight, Conditional } from './styles';

const Navbar = () => (
  <NavbarContainer>
    <Logo>
      <i className="fa fa-compass fa-2x" aria-hidden="true" />
      <h2><Link to="/">jobbatical</Link></h2>
    </Logo>

    <Nav>
      <Conditional>
        <Link to="/jobs">Explore Jobs</Link>
      </Conditional>

      <SubNav>
        <Link to="/profile">Log In</Link>
        <Link to="/profile">Join</Link>
        <Conditional>
          <HighLight>
            <Link to="">For the employers →</Link>
          </HighLight>
        </Conditional>
      </SubNav>
    </Nav>
  </NavbarContainer>
);

{ /* <Link to="/hiring">For the employers →</Link> */ }


export default Navbar;
