import styled from 'styled-components';

export const FooterContainer = styled.div`
  padding: 2em;
  border-top: 1px solid #ddd;
  text-align: center;
  
  a {
    align-self: center;
    margin: 0.5em;
    text-decoration: none;
    color: #666;
  }

  nav {
    margin-top: 1em;
  }

  @media (min-width: 60em) {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  p {
    display: inline-block;
    color: #666;
    margin-left: 15px;
  }
`;
