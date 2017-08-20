import styled from 'styled-components';
import { c1Card, c1Btn } from '../JobDetails/styles';

export const CardHeader = styled(c1Card)`
  margin-bottom: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  padding-bottom: 17px;
`;

export const JobHeaderTitle = styled.h2`
  margin-top: 0;
  font-size: 1.8rem;
  color: black;
`;

export const JobHeaderBaseContainer = styled.div`
  width: 100%;
`;

export const ExpiredMessage = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 5px;
  border: 2px solid #faebcc;
  background-color: #fcf8e3;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0px 0px 0px 10px;
  
    i {
      margin-right: 3px;
      color: #cade83;
    }
  }
`;

export const OtherJobsButton = styled(c1Btn)`
  margin-right: 10px;
  background-color: white;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  color: #e6cd98;
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
  color: ${props => (props.expiring ? 'red' : '#26b999')}
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
  align-items: center;
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

export const ApplyNowButton = styled(c1Btn)`
  background-color: #04d092;
  color: #ffffff;

  &:hover {
    background-color: #09b480;
  };
`;

export const CardShare = styled(c1Card)`
  min-height: 20px;  
  background-color: #e1dddd;  
  border-top: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-top: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  
  p {
    margin: 0px;
    padding: 0px;
    }

  i {
    margin-left: 10px;
  }
`;

export const Fb = styled.i`
  color: #3b5998;
`;

export const Ln = styled.i`
  color: #08669c;
`;

export const Twitter = styled.i`
  color: #10a9e2;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: white;
  display: ${props => (props.isExpired ? 'none' : 'block')};
  position: ${props => (props.fixed ? 'fixed' : 'static')};
  bottom: 0px;
  margin-bottom: ${props => (props.fixed ? '0px' : '-100px')};
`;

export const CardFooter = styled.article`
    margin: 10px 10px;
    padding: 0px 35px 35px 35px;
    position: relative;
    display: flex;
    justify-content: space-between;

    font-size: 0.8rem;

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
`;

export const FooterActions = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`;
