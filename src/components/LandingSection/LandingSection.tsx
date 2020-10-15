import React from 'react'
import { PrimarySectionArea, SecondarySectionArea } from './styles';
import { Accent } from "../Accent";
import FadeInUp from '../Animations/FadeInUp';
import { Section } from '../Section';

export const LandingSection = () => (
  <Section centered>
    <PrimaryTitle />
    <SecondaryTitle />
  </Section>
);

const PrimaryTitle = () => {
  
  return (
    <PrimarySectionArea>
      <h1>
        <FadeInUp>
          Hi,
        </FadeInUp>
        <br/>
        <FadeInUp
          transition={{ delay: 0.8 }}
        >
          I'm 
        </FadeInUp>
        <FadeInUp
          transition={{ delay: 0.9 }}
        >
          <Accent>Chet</Accent>
        </FadeInUp>
      </h1>
    </PrimarySectionArea>
  );
}

const SecondaryTitle = () => (
  <SecondarySectionArea>
    <FadeInUp
     transition={{ delay: 1.5 }}
    >
      <h3>I'm a <Accent>Front-end</Accent> Developer</h3>
    </FadeInUp>
  </SecondarySectionArea>
);


