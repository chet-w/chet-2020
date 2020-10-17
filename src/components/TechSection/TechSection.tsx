import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Section } from "../Section"
import { LogoContainer } from "./styles";
import { Accent } from "../Accent"

interface Props {
  data?: any 
}

export const TechSection = (props: Props) => {

  const data = useStaticQuery(graphql`
    query GetAllLogos {
      logos: allFile(filter: {relativeDirectory: {eq: "logos"}}) {
        edges {
          node {
            id
            name
            relativeDirectory
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const logos = data.logos.edges;
  return (
    <Section
      centered
      middled
    >
      <LogoContainer>
        {/* <img alt="Gatsby" src={require("../../images/logos/gatsby.svg")} />
        <img alt="next" src={require("../../images/logos/next.svg")} />
        <img alt="ionic" src={require("../../images/logos/ionic.svg")} />
        <img alt="styled-components" src={require("../../images/logos/styled-components.png")} />
        <div>
          <h2>
            Using<Accent>React</Accent>
          </h2>
          (and friends)
        </div>
        <img alt="framer-motion" src={require("../../images/logos/framer-motion.png")} />
        <img alt="react-testing-library" src={require("../../images/logos/react-testing-library.png")} />
        <img alt="typescript" src={require("../../images/logos/typescript.svg")} />
        <img alt="jest" src={require("../../images/logos/jest.svg")} /> */}
        {logos && logos.map((logo: any) => (
          <Img fluid={logo.node.childImageSharp.fluid} />
        ))}
      </LogoContainer>
    </Section>
  )
};