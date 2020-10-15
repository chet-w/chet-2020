import React from 'react'
import { Section, PrimarySectionArea, SecondarySectionArea } from './styles';
import { Accent } from "../Accent";

export const LandingSection = () => (
  <Section>
    <PrimaryTitle />
    <SecondaryTitle />
  </Section>
);

const PrimaryTitle = () => (
  <PrimarySectionArea>
    <h1>
      Hi,<br/>
      I'm <Accent>Chet</Accent>
    </h1>
  </PrimarySectionArea>
);

const SecondaryTitle = () => (
  <SecondarySectionArea>
    <h3>I'm a <Accent>Front-end</Accent> Developer</h3>
  </SecondarySectionArea>
);
