import styled from 'styled-components';
import { globalStyles } from '../globalStyles.js';
import rick from "./assets/rick.jpg"
import curlyBraces from "./assets/curlyBraces.svg"

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
`

export const SVGLeft = styled.svg`
  z-index: 0;
  transform: scale(1.5) rotate(90deg);
  margin-bottom: -50px;

  @media (min-width: 600px) {
    transform: scale(2) rotate(90deg);
  }

  @media (min-width: 900px) {
    position: absolute;
    transform: scale(1.5) translate(-250px, 15px);
  }
`

export const SVGRight = styled.svg`
  display: none;

  @media (min-width: 900px) {
    display: inline;
    position: absolute;
    transform: rotate(180deg) scale(1.5) translate(-250px, -15px);
  }
`

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  z-index: 5;
`

export const H1 = styled.h1`
  padding: 0;
  margin: 0;
  padding-top: 1rem;

  font-family: 'Days One', sans-serif;
  line-height: 3rem;

  font-size: 10vw;
  color: white;

  @media (min-width: 500px) {
      font-size: 3rem;
  }
`

export const H2 = styled.h2`
  margin: 0;
  color: white;
  font-family: 'Khula', sans-serif;
  font-size: 7vw;

  @media (min-width: 500px) {
      font-size: 2rem;
  }

`

export const P = styled.p`
  color: white;
  text-align: center;
`

export const Footer = styled.div`
  font-size: 1.5rem;

`
