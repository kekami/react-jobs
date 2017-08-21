import styled from 'styled-components';
import { globalStyles } from '../globalStyles';
import { JobDetailsWrapper } from '../../container/JobDetails/styles';

export const Wrapper = styled(JobDetailsWrapper)`
  min-height: 1500px;
  margin-top: -500px;

  background-color: #fafafa;
  border-radius: 5px;


  @media (max-width: 775px) {
    margin-top: 0px;
  }
`;

export const c1Card = styled.article`
  width: auto;
  min-height: 100px;
  margin: 10px 10px;
  background-color: white;
  border: 1px solid #edebeb;
  border-radius: 5px;
  padding: 35px;
  color: ${globalStyles.DARKGREY};
  position: relative;

  h1 {
    margin-top: 0px;
    margin-bottom: 0.5rem;
    color: black;
  }

  h2 {
    margin-top: 0rem;
  }
`;

export const c1Btn = styled.button`
  margin-left: 5px;
  padding-top: 1em;
  padding-bottom: 1em;
  min-width: 8em;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export const CardGeneralTag = styled(c1Card)`
  
  li {
    color: ${globalStyles.GREEN};
    line-height: 2rem;  
    
    span {
      color: ${globalStyles.DARKGREY};
      padding-left: 10px;
    }
  }

  ul:last-child {
    margin-bottom: 0px;
  }

  p {
    line-height: 1.5rem;
  }
`;

export const Bold = styled.p`
  font-weight: bold;
  margin-top: 0px;
`;


export const SummaryTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoTag = styled.p`
  display: inline-block;
  background-color: ${globalStyles.DARKGREY};
  color: white;
  padding: 5px;
  margin: 5px 10px 5px 0px;
  font-size: 0.8rem;
  border-radius: 2px;
`;

export const JoinButton = styled(c1Btn)`
background-color: ${globalStyles.LIGHTGREY};
color: white;

&:hover {
  background-color: ${globalStyles.DARKGREY}
}
`;
