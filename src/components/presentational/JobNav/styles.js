import styled from 'styled-components';
import { JobNavSubcomponentLayout } from '../../container/JobDetails/styles.js'
import { globalStyles } from '../globalStyles.js';

export const Wrapper = styled(JobNavSubcomponentLayout)`
  min-height: 200px;
  overflow: hidden;
  font-size: 1rem;
`

export const InnerBox = styled.div`
  height: 400px;
`

export const JobItems = styled.ul`
  height: 100%;
  list-style-type: none;
  padding-left: 20px;
  padding-top: 1rem;
`

export const Item = styled.li`
  padding-top: 1rem;
  color: ${ props => props.item === props.parentProps.currentItem ? 'blue' : globalStyles.LIGHTGREY };


  :hover {
    color: grey;
  }
`