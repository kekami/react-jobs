import styled from 'styled-components';
import { globalStyles } from '../globalStyles.js';
import { JobDetailsWrapper } from '../../container/JobDetails/styles';
import { C1_Card, C1_Btn } from '../JobDetails/styles';

export const CardHeader = styled(C1_Card)`
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
`;

export const HeaderActions = styled.div`
  display: flex;
`;

export const SaveForLater = styled.button`
  border: none;
  text-transform: Uppercase;
  background-color: transparent;
  color: #8a8a8a;
  cursor: pointer;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

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
`;

export const ApplyNowButton = styled(C1_Btn)`
  background-color: #04d092;
  color: #ffffff;

  &:hover {
    background-color: #09b480;
  };
`;

export const CardShare = styled(C1_Card)`
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
    }
`

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: white;
  display: ${props => props.isExpired ? 'none' : 'block'};
  margin-bottom: -100px;
`;

export const CardFooter = styled.article`
    margin: 10px 10px;
    padding: 0px 35px 35px 35px;
    position: relative;
    display: flex;

    p {
      margin-top: 2px;
      margin-bottom: 2px;
      display: inline-block;
    }
`;

export const JobFooterTitle = styled.h3`
  color: black;
  margin-bottom: 2px;
  margin-top: 2px;
`;

export const Expired = styled.p`
  color: red;
`

export const FooterActions = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

`