import React from 'react'
import { Section } from '../Section';
import { Card } from './styles';

interface Props {
  
}

export const AboutSection = (props: Props) => {
  return (
    <Section middled centered>
      <h2>I like making</h2>
      <Card>
        <h3>Accessible</h3>
      </Card>
    </Section>
  )
};
