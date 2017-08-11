import styled from 'styled-components';

export const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10em 1em;
  background-color: #1c75bc;
  color: #ffffff;

  @media (min-width: 60em) {
    padding: 10em;
  }
`;

export const MissionHeader = styled.h2`
  margin-bottom: 4em;
  text-transform: Uppercase;
  letter-spacing: 0.5em;
  font-size: 1.2rem;
`;

export const MissionContent = styled.p`
  line-height: 200%;
`;

export const JoinButton = styled.button`
  align-self: flex-start;
  margin: 4em 0;
  padding: 1em 2em;
  border-radius: 3px;
  border: none;
  text-transform: Uppercase;
  font-weight: 700;
  background-color: #ffffff;
  color: #1c75bc;
`;
