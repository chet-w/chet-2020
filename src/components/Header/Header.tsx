import React from 'react'
import { StyledHeader, StyledHeaderLinks } from './styles';
import { Container } from "../Container";
import { Accent } from '../Accent';

export const Header = () => (
  <StyledHeader>
    <Container>
      <h3><Accent>Chet</Accent></h3>
      <HeaderLinks />
    </Container>
  </StyledHeader>
);

const HeaderLinks = () => (
  <StyledHeaderLinks>
    <li>Ramblings</li>
    <li>Github</li>
    <li>Contact</li>
  </StyledHeaderLinks>
)
