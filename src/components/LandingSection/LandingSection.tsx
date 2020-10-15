import React, { useState, useEffect } from 'react'
import { Section, PrimarySectionArea, SecondarySectionArea } from './styles';
import { Accent } from "../Accent";
import { motion } from 'framer-motion';

export const LandingSection = () => (
  <Section>
    <PrimaryTitle />
    <SecondaryTitle />
  </Section>
);

const PrimaryTitle = () => {
  
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  const [animatedState, setAnimatedState] = useState("hidden");

  useEffect(() => {
    setTimeout(() => setAnimatedState("visible"), 1000);
  }, []);


  return (
    <PrimarySectionArea
      initial="hidden"
      animate={animatedState}
      variants={list}
    >
      <h1>
        <motion.span variants={item}>
          Hi,
        </motion.span>
        <br/>
        <motion.span variants={item}>
          I'm 
        </motion.span>
        <motion.span variants={item}>
          <Accent>Chet</Accent>
        </motion.span>
      </h1>
    </PrimarySectionArea>
  )
};

const SecondaryTitle = () => (
  <SecondarySectionArea>
    <h3>I'm a <Accent>Front-end</Accent> Developer</h3>
  </SecondarySectionArea>
);


