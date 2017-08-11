import styled from 'styled-components';

export const ExploreJobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F3F3F3;

  h1 {
    text-align: center;
  }

  @media (min-width: 60em) {
    padding: 5em 0;

    h1 {
      font-size: 3rem;
    }
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin: 0 1em;
    padding: 1em;

    &:focus {
      outline: none;
    }
  }

  button {
    margin: 1em;
    margin-bottom: 0;
    padding: 1em 2em;
    border: none;
    background-color: #04d092;
    color: #ffffff;

    &:focus {
      outline: none;
    }
  }

  @media (min-width: 50em) {
    flex-direction: row;
    justify-content: center;

    input {
      margin: 0;
      width: 25em;
    }

    button {
      margin: 0;
    }
  }
`;

export const ResultsText = styled.p`
  margin: 2em 0;
  text-align: center;
`;

export const JobCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 75em;
  margin: 0 auto;
  margin-top: 2em;
`;
