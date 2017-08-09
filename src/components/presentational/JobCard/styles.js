import styled from 'styled-components';

export const JobCardContainer = styled.div`
  position: relative;
  margin: 1em;
  height: 26em;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: all 0.3s ease;
  background-color: #ffffff;

  img {
    filter: ${props => props.expired ? 'grayscale(100%)' : 'none'};
    width: 100%;
    height: 50%;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
    transition: height 0.3s ease;
  }

  a {
   text-decoration: none;
  }

  &:hover {
    box-shadow: 5px 5px 23px 0px rgba(168,168,168,1);
  }

  @media (min-width: 45em) {
    width: 20em;

    img {
      height: 60%;
    }

    &:hover {
      img {
        height: 50%;
      }
    }
  }
`;

export const Content = styled.div`
  padding: 1em;
  height: 40%;
`;

export const JobHeader = styled.h2`
  margin-top: 0;
  font-size: 1.2rem;
  color: ${props => props.expired ? '#8a8a8a' : '#000000'};
`;

export const JobSubHeader = styled.h3`
  text-transform: Uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.8rem;
  font-weight: 300;
  color: #8a8a8a;
`;

export const CompanyName = styled.span`
  font-weight: 700;
`;

export const JobDescription = styled.div`
  opacity: 1;
  font-size: 0.9rem;
  color: #8a8a8a;
  transition: opacity 0.3s ease-in;
  

  @media (min-width: 45em) {
    height: 0;
    opacity: 0;

    ${JobCardContainer}:hover & {
      opacity: 1;
    }
  }
`;

export const Truncate = styled.div`
  overflow: hidden;
  height: 2rem;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid #ddd;
  font-size: 0.8rem;
  text-transform: Uppercase;
  color: #8a8a8a;

  button {
    border: none;
    text-transform: Uppercase;
    background-color: transparent;
    color: #8a8a8a;
    cursor: pointer;

    &:hover {
      color: #000000;

      i {
        color: #26b999;
      }
    }
  }
`;

export const TimeLeft = styled.span`
  font-weight: 700;
  color: ${props => props.expiring ? 'red' : '#26b999'}
`;
