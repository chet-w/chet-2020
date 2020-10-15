import React from 'react'
import { Section, PrimarySectionArea, SecondarySectionArea } from './styles';
import { Accent } from "../Accent";
import { motion } from 'framer-motion';

export const LandingSection = () => (
  <Section>
    <PrimaryTitle />
    <SecondaryTitle />
  </Section>
);

const PrimaryTitle = () => (
  <PrimarySectionArea>
    <h1>
      <motion.span
        style={{ display: "inline-block" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi,
      </motion.span>
      <br/>
      <motion.span
        style={{ display: "inline-block", marginRight: "1rem" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        I'm 
      </motion.span>
      <motion.span
        style={{ display: "inline-block" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <Accent>Chet</Accent>
      </motion.span>
    </h1>
  </PrimarySectionArea>
);

const SecondaryTitle = () => (
  <SecondarySectionArea>
    <h3>I'm a <Accent>Front-end</Accent> Developer</h3>
  </SecondarySectionArea>
);


