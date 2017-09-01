import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fafafa;
`;

export const Details = styled.div`
  width: 1150px;
  margin: auto;
  display: flex; 
  justify-content: flex-start;

  @media (max-width: 1200px) {
    width: 950px;
  }

  @media (max-width: 1000px) {
    width: 700px;
  }

  @media (max-width: 736px) {
    width: 98%;
  }
`;

export const JobDetailsWrapper = styled.section`
  width: calc(100% - 250px);
  padding: 10px;
  float: left;

  @media (max-width: 1000px) {
    width: 100%;

  }
`;

export const JobNavSubcomponentLayout = styled.div`
  min-width: 200px;
  margin: 0px;
  float: left;
  
  @media (max-width: 1000px) {
    display: none;
  }
`;

