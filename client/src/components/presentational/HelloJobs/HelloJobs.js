import React from 'react';
import { Header } from './styles';

const HelloJobs = () => {
  const randomColor = () => {
    return `#${Math.random().toString(16).substr(-6)}`;
  };

  return (
    <Header color={randomColor()}>Hello react-jobs!</Header>
  );
};

export default HelloJobs;
