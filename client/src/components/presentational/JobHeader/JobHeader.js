import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export default function JobHeader(props) {
  return (
    <Wrapper>
      <img src={props.imageUrl ? props.imageUrl : ''} alt="" />
    </Wrapper>
  );
}

JobHeader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

