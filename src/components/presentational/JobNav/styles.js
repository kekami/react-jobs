import styled from 'styled-components';
import { globalStyles } from '../globalStyles.js';

export const Wrapper = styled.article`
  width: 300px;
  height: 200px;
  float: left;
  border: 1px solid black;
  overflow: hidden;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const InnerBox = styled.div`
  height: 400px;
`

export const JobItems = styled.ul`
  height: 100%;
  list-style-type: none;
  padding-left: 20px;
  padding-top: 20px;
`

export const Item = styled.li`
  padding-top: 10px;
  color: ${ props => props.item === props.parentProps.currentItem ? 'blue' : 'black' };


  :hover {
    color: grey;
  }
`