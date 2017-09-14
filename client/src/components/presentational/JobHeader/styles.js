import styled from 'styled-components';
import { globalStyles } from '../globalStyles';

export const Wrapper = styled.div`
  height: 600px;
  width: 100%;
  border: none;
  background-color: none;

  @media (max-width: 775px) {
    height: auto;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0 0;
  }
`;
