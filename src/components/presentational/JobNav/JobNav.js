import React from 'react';
import { Wrapper, InnerBox, JobItems, Item } from './styles';


const capitalise = (str) => str.toUpperCase()

export default function JobNav(props) {

  const Items = props.items.map((item) => {
      if ( item === "jobDescription" ) { item = "job description"};
      const itemCap = capitalise(item)

      return <Item key={item} item={item} parentProps={props}>{itemCap}</Item>
    }
  )
  
  return (
      <Wrapper>
           <div ref={props.getRef}>
         <InnerBox>
          <JobItems>
            {Items}
          </JobItems>
        </InnerBox>
        </div>
      </Wrapper>
  );
}
