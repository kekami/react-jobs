import React from 'react';
import { Wrapper, InnerBox, JobItems, Item } from './styles';


const capitalise = (str) => str.toUpperCase()

export default function JobNav(props) {

  const Items = props.items.map((item) => {
      if ( item === "jobDescription" ) { item = "job description"};
      const itemCap = capitalise(item)

      return <Item key={item} data-item={item} parentProps={props}>{itemCap}</Item>
    }
  )
  
  return (
    <Wrapper 
      fixed={props.fixed} 
      bottom={props.bottom}
      top={props.top} 
      left={props.left}
      >
        <div ref={props.getRef}> 
        <InnerBox>
          <JobItems onClick={ props.handleClick }>
            {Items}
          </JobItems>
        </InnerBox>
      </div>
    </Wrapper>
  );
}
