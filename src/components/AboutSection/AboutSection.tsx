import React, { useState, useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { Section } from '../Section';
import { Accent } from "../Accent"
import { Card, CardContainer } from './styles';
import FadeInUp from "../Animations/FadeInUp"

interface Props {
  
}

export const AboutSection = (props: Props) => {

  const { ref, inView } = useInView({ threshold: 0.8 });

  return (
    <Section
      middled 
      centered
      ref={ref}
    >
      <FadeInUp
        shouldAnimate={inView}
      >
        <h2>I like making</h2>
      </FadeInUp>
      <CardContainer>
        <FadeInUp
          shouldAnimate={inView}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <h3><Accent>Delightful</Accent></h3>
          </Card>
        </FadeInUp>
        <FadeInUp
          shouldAnimate={inView}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <h3><Accent>Modern</Accent></h3>
          </Card>
        </FadeInUp>
        <FadeInUp
          shouldAnimate={inView}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <h3><Accent>Accessible</Accent></h3>
          </Card>
        </FadeInUp>
      </CardContainer>
      <FadeInUp
        shouldAnimate={inView}
        transition={{ delay: 0.8 }}
      >
        <h3>things on the web</h3>
      </FadeInUp>
    </Section>
  )
};
