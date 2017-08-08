import styled from 'styled-components';
import { globalStyles } from '../globalStyles.js';

export const Wrapper = styled.section`
  width: calc(100% - 200px);
  min-height: 1500px;
  margin-top: -300px;
  padding: 10px;
  background-color: #fafafa;
  border: 1px solid black;
  float: left;

  @media (max-width: 775px) {
    margin-top: 0px;
  }
`

export const Card = styled.article`
  width: auto;
  min-height: 100px;
  margin: 10px 10px;
  background-color: white;
  border: 1px solid #edebeb;
  border-radius: 5px;
  padding: 15px;
`

export const JobHeaderTitle = styled.h2`
  margin-top: 0;
  font-size: 1.1rem;
  color: black;
`;

export const JobHeaderBaseContainer = styled.div`
  width: 100%;
`
export const JobHeaderBase = styled.div`
  width: 100%;
  font-size: 0.8rem;
  color: #8a8a8a;
  
  display: flex;
  justify-content: space-between;
`;

  
export const TimeLeft = styled.span`
  font-weight: 700;
  margin-bottom: 0px;
  color: ${props => props.expiring ? 'red' : '#26b999'}
`;

export const PositionAvailability = styled.p`
  margin: 5px;
`

export const HeaderActions = styled.div`
  display: flex;

  button {
    border: none;
    text-transform: Uppercase;
    background-color: transparent;
    color: #8a8a8a;
    cursor: pointer;
  
    &:hover {
      color: #000000;
    }

    i {
      margin: 5px;
      border: 1px solid #26b999;
      color: #26b999;
      padding: 12px;
      border-radius: 2px;

      &: hover {
        background-color #26b999;
        color: #ffffff; 

      }
    }

}
  }

` 

export const ViewJobsButton = styled.button`
  margin: 1em;
  padding: 1em 3em;
  border: none;
  border-radius: 3px;
  background-color: #04d092;
  color: #ffffff;
  cursor: pointer;
`;