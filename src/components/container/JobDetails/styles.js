import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fafafa;
`

export const Details = styled.div`
  width: 1100px;
  margin: auto;
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 800px;
  }

  @media (max-width: 1000px) {
    width: 95%;
  }
  
  @media (max-width: 700px) {
    width: 665px;
  }
` 