import React from 'react'
import { Section, PrimarySectionArea, SecondarySectionArea } from './styles';
import { Accent } from "../Accent";
import { motion } from 'framer-motion';
import FadeInUp from '../Animations/FadeInUp';

export const LandingSection = () => (
  <Section>
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
    <h3>I'm a <Accent>Front-end</Accent> Developer</h3>
  </SecondarySectionArea>
);


