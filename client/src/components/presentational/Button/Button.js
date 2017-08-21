import styled, { keyframes } from 'styled-components';
import { globalStyles } from '../globalStyles';

export const FlexRow = styled.div`
  height: auto;
  padding-bottom: 40px;
    display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  margin: 30px 20px 0px 20px;
  padding: 10px;
  min-height: 70px;
  min-width: 220px;
  display: inline-block;
  background-color: ${globalStyles.button};
  border: 0px;
  border-radius: 2px;
  box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.75);
  color: white;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const hoverPop = keyframes`
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export const I = styled.i`
  margin-right: 8px;

  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ();
  box-shadow: 0 0 1px transparent;

  &:hover, &:focus, &:active {
    animation-name: ${hoverPop};
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
  }
`;
