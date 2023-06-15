//import React from 'react'

import logo from '../../assets/logo.svg';

import {
    Container,
    BoxLogo,
    Image,
    Intro,
} from './styles';

export const Header = () => {
  return (
    <Container>
      <BoxLogo>
        <Image src={logo} alt="Logo Smartfit" />
      </BoxLogo>
      <Intro>
        <h1>Reabertura<br />
        Smart fit</h1>
        <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
      </Intro>
    </Container>
  )
}
