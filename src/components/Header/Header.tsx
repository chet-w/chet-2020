import React from 'react'
import { Link } from "gatsby";
import { StyledHeader, StyledHeaderLinks } from './styles';
import { Container } from "../Container";
import { Accent } from '../Accent';
import useScrollDistance from "../../hooks/useScrollDistance"

export const Header = () => {
  
  const hasBeenScrolled = useScrollDistance({ threshold: window.innerHeight/2 });

  const variants = {
    out: { opacity: 0, y: -50 },
    in: { opacity: 1, y: 0 }
  };

  return (
    <StyledHeader
      variants={variants}
      initial="out"
      animate={hasBeenScrolled ? "in" : "out"}
    >
      <Container>
        <h3><Accent>Chet</Accent></h3>
        <HeaderLinks />
      </Container>
    </StyledHeader>
  )
};

const HeaderLinks = () => (
  <StyledHeaderLinks>
    <li><Link to="/ramblings">Ramblings</Link></li>
    <li><a href="https://github.com/chet-w">Github</a></li>
    <li><a href="#contact">Contact</a></li>
  </StyledHeaderLinks>
)
