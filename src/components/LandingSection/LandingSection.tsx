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
      Hey,<br/>
      I'm <Accent>Chet</Accent>
    </h1>
  </PrimarySectionArea>
);

const SecondaryTitle = () => (
  <SecondarySectionArea>
    <h2><Accent>Front-end</Accent> Developer</h2>
  </SecondarySectionArea>
);
