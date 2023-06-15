/* eslint-disable react/prop-types */
//import React from 'react';

import {
    Container,
} from './styles';

export const Button = ({ title, ...props }) => {
  return (
    <Container {...props}>
        {title}      
    </Container>
  )
}
