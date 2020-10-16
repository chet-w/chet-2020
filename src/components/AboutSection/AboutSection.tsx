import React, { useState, useRef } from 'react'
import { Section } from '../Section';
import { Card } from './styles';
import FadeInUp from "../Animations/FadeInUp"

interface Props {
  
}

export const AboutSection = (props: Props) => {

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const AboutSectionRef = useRef(null);


  return (
    <Section
      middled 
      centered
      ref={AboutSectionRef}
    >
      <h2>I like making</h2>
      <button onClick={() => setShouldAnimate(!shouldAnimate)}>fade in </button>
      <FadeInUp
        shouldAnimate={shouldAnimate}
      >
        <Card>
          <h3>Accessible</h3>
        </Card>
      </FadeInUp>
    </Section>
  )
};
