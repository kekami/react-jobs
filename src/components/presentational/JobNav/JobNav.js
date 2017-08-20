import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InnerBox, JobItems, Item } from './styles';

const capitalise = str => str.toUpperCase();

export default function JobNav(props) {
  const Items = props.items.map((item) => {
    const itemName = item[0];
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

JobNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired],
      ),
    ),
  ).isRequired,
  fixed: PropTypes.bool.isRequired,
  bottom: PropTypes.bool.isRequired,
  top: PropTypes.number,
  left: PropTypes.number,
  getRef: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

JobNav.defaultProps = {
  top: 0,
  left: 0,
};
