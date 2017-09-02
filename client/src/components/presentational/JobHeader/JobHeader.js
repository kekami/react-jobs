import React from 'react';
import { Wrapper } from './styles';

export default function JobHeader(props) {
  return (
    <Wrapper>
      <img src={props.imageUrl ? props.imageUrl : ''} alt="" />
    </Wrapper>
  );
}
