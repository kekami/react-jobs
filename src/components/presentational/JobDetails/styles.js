import styled from 'styled-components';
import { globalStyles } from '../globalStyles.js';

const DARKGREY = "#6e6b6b";
const LIGHTGREY = "#8a8a8a";
const GREEN = "#09b480";

export const Wrapper = styled.section`
  width: calc(100% - 200px);
  min-height: 1500px;
  margin-top: -500px;
  padding: 10px;
  background-color: #fafafa;
  border-radius: 5px;
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
  padding: 35px;
`

export const CardHeader = styled(Card)`
  margin-bottom: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  padding-bottom: 17px;
`

export const JobHeaderTitle = styled.h2`
  margin-top: 0;
  font-size: 1.8rem;
  color: black;
`;

export const JobHeaderBaseContainer = styled.div`
  width: 100%;
`;

export const ExpiredMessage = styled.div`
`;

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

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 5px;
  }
`

export const HeaderActions = styled.div`
  display: flex;
`

export const SaveForLater = styled.button`
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
    };
  };
`

export const ApplyNowButton = styled.button`
  margin: 5px;
  padding: 1em 3em;
  border: none;
  border-radius: 3px;
  background-color: #04d092;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #09b480;
  };
`;

export const CardShare = styled(Card)`
  min-height: 20px;  
  background-color: #e1dddd;  
  border-top: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-top: 0px;
  display: flex:
  align-items: center;
  justify-content: center;
  
  p {
    margin: 0px;
    padding: 0px;
    color: ${DARKGREY};
    }
`

export const CardGeneralTag = styled(Card)`
  
  h1 {
    margin-top: 0px;
  }

  li {
    color: ${GREEN};
    line-height: 2rem;  
    
    span {
      color: ${LIGHTGREY};
      padding-left: 10px;
    }
  }

  ul:last-child {
    margin-bottom: 0px;
  }

`