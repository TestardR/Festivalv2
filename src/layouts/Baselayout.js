import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './Navbar';

const BaseLayout = props => {
  const { children } = props;

  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: '1.5rem' }}>{children}</Container>
    </div>
  );
};

export default BaseLayout;
