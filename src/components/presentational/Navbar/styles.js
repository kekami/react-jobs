import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 1em;
  color: #1c75bc;

  a {
    text-decoration: none;
    color: #1c75bc;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1em;

  img {
    padding-right: 1em;
  }

  h2 {
    font-weight: 300;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex: 1;

  a {
    padding-left: 1em;
    text-transform: Uppercase;
  }
`;

export const SubNav = styled.div`
  display: flex;
`;

export const Conditional = styled.div`
  display: none;

  @media (min-width: 30em) {
    display: block;
  }
`;

export const HighLight = styled.div`
  a {
    color: green;
  }
`;
