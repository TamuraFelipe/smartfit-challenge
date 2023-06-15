//import React from 'react'

import logo from '../../assets/logo.svg';

import {
    Container,
} from './styles'

export const Footer = () => {
  return (
    <Container>
      <img src={logo} alt="Logo do rodapé" />
      <p>Todos os direitos reservados - 2020</p>
    </Container>
  )
}
