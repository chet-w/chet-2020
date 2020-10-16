import React from 'react'
import { Link } from "gatsby";
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
    <li><Link to="/ramblings">Ramblings</Link></li>
    <li><a href="https://github.com/chet-w">Github</a></li>
    <li><a href="#contact">Contact</a></li>
  </StyledHeaderLinks>
)
