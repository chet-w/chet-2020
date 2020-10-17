import React from 'react';
import { graphql } from "gatsby";
import { Section } from "../Section"
import { LogoContainer } from "./styles";
import { Accent } from "../Accent"

interface Props {
  data?: any 
}

export default TechSection = (props: Props) => {
  return (
    <Section
      centered
      middled
    >
      <LogoContainer>
        <img alt="Gatsby" src={require("../../images/gatsby.svg")} />
        <img alt="next" src={require("../../images/next.svg")} />
        <img alt="ionic" src={require("../../images/ionic.svg")} />
        <img alt="styled-components" src={require("../../images/styled-components.png")} />
        <div>
          <h2>
            Using<Accent>React</Accent>
          </h2>
          (and friends)
        </div>
        <img alt="framer-motion" src={require("../../images/framer-motion.png")} />
        <img alt="react-testing-library" src={require("../../images/react-testing-library.png")} />
        <img alt="typescript" src={require("../../images/typescript.svg")} />
        <img alt="jest" src={require("../../images/jest.svg")} />
      </LogoContainer>
    </Section>
  )
};

export const query = graphql`
  query GetAllLogos {
    logos: allFile(filter: {relativeDirectory: {eq: "logos"}}) {
      edges {
        node {
          id
          name
          relativeDirectory
          childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
      }
    }
  }
`;