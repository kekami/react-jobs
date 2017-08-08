import React from 'react';
import { Wrapper } from './styles';

export default function ApplyNow(props) {
  return (
    <div ref={ props.getRef }>
      <Wrapper >
       <p>Sticky Footer</p>
      </Wrapper>
    </div>
  );
}
