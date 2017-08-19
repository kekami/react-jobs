import React from 'react';
import { Wrapper, InnerBox, JobItems, Item } from './styles';


const capitalise = str => str.toUpperCase();

export default function JobNav(props) {

  const Items = props.items.map((item) => {
    const itemName = typeof (item) === 'string' ? item : item[0];
    let displayName = itemName; 

    if (displayName === 'jobDescription') { displayName = 'job description'; }
    const displayNameCap = capitalise(displayName);

    return <Item key={itemName} data-item={itemName} parentProps={props}>{displayNameCap}</Item>;
  });
  return (
    <Wrapper
      fixed={props.fixed} 
      bottom={props.bottom}
      top={props.top} 
      left={props.left}
    >
      <div ref={props.getRef}> 
        <InnerBox>
          <JobItems onClick={props.handleClick}>
            {Items}
          </JobItems>
        </InnerBox>
      </div>
    </Wrapper>
  );
}
