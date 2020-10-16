import React, { useState, useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { Section } from '../Section';
import { Card } from './styles';
import FadeInUp from "../Animations/FadeInUp"

interface Props {
  
}

export const AboutSection = (props: Props) => {

  const { ref, inView, entry } = useInView({ threshold: 0.8 });

  return (
    <Section
      middled 
      centered
      ref={ref}
    >
      <h2>I like making</h2>
      <FadeInUp
        shouldAnimate={inView}
      >
        <Card>
          <h3>Accessible</h3>
        </Card>
      </FadeInUp>
    </Section>
  )
};
