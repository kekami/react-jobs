import styled from 'styled-components';
import { globalStyles } from '../globalStyles';
// import rick from './assets/rick.jpg';

export const Wrapper = styled.div`
  height: 100vh;
  min-height: 700px;
  width: 100%;
  font-family: 'Khula', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${globalStyles.bgColor};
  position: relative;
`;

export const SVGLeft = styled.svg`
  z-index: 0;
  transform: scale(1.5) rotate(90deg);
  margin-bottom: -50px;

  @media (min-width: 600px) {
    transform: scale(2) rotate(90deg);
  }

  @media (min-width: 900px) {
    position: absolute;
    left: -180px;
    top: 15px;
    transform: scale(1.5);
  }
`;

export const SVGRight = styled.svg`
  display: none;

  @media (min-width: 900px) {
    display: inline;
    position: absolute;
    right: -180px;
    top: 15px;
    transform: rotate(180deg) scale(1.5);
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  z-index: 5;
  position: relative;
`;

export const H1 = styled.h1`
  padding: 0;
  margin: 0;
  padding-top: 1rem;

  font-family: 'Khula', sans-serif;
  line-height: 3rem;

  font-size: 10vw;
  color: white;

  @media (min-width: 500px) {
      font-size: 4rem;
  }
`;

export const H2 = styled.h2`
  margin: 10px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 7vw;

  @media (min-width: 500px) {
      font-size: 3rem;
  }
`;

export const P = styled.p`
  color: white;
  text-align: center;

  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const P2 = styled.p`
padding: 0 0.3em;
color: white;
text-align: center;
font-size: 1.2rem;

  @media (min-width: 500px) {
    font-size: 1.8rem;
  }
`;

export const Foot = styled.div`
  font-size: 1.5rem;

`;
