import styled from 'styled-components';
import { JobNavSubcomponentLayout } from '../../container/JobDetails/styles.js'
import { globalStyles } from '../globalStyles.js';

export const Wrapper = styled(JobNavSubcomponentLayout)`
  height: auto;
  overflow: hidden;
  font-size: 1rem;
  box-sizing: border-box;
  position: ${ (props) => props.fixed ? 'fixed' : 'static' };
  top: ${ (props) => `${props.top}px` };
  left: ${ (props) => `${props.left}px` };
  align-self: ${ (props) => props.bottom ? 'flex-end' : "" }
  `

export const InnerBox = styled.div`
  height: 100%;
  width: 100%;
  margin: 0px;
`

export const JobItems = styled.ul`
  height: 100%;
  margin: 0px;
  list-style-type: none;
  padding: 1rem 0px 2rem 20px;  
  cursor: pointer;
`

export const Item = styled.li`
  padding-top: 1rem;
  color: ${ props => props['data-item'] === props.parentProps.currentItem ? globalStyles.BLUE : globalStyles.LIGHTGREY };
  font-size: 0.8rem;
  :hover {
    color: ${globalStyles.DARKGREY};
  }
`